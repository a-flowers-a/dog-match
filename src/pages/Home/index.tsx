import { useCallback, useEffect, useMemo, useState } from "react";
import {
  faArrowDownAZ,
  faArrowDownZA,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
//Components
import ListCard from "../../components/molecules/ListCard";
import IconButton from "../../components/atoms/IconButton";
import FilterSelect from "../../components/molecules/FilterSelect";
import Paginator from "../../components/atoms/Paginator";
import CustomButton from "../../components/atoms/CustomButton";
import MatchModal from "../../components/molecules/MatchModal";
//Context
import { LoaderContext } from "../../context/LoaderProvider/context";
import { ErrorModalContext } from "../../context/ErrorModal/context";
//helpers
import {
  generateBreedSelectOptions,
  getMaxNumPages,
  getPageAndOffset,
  sortDogsAlphabetically,
} from "../../helpers/utils";
//Services
import { getBreeds, getDogsIDs, getDogs, matchDogs } from "../../services/dog";
//Types
import { Dog } from "../../types/dog";
import { SelectItem, SortType } from "../../types/general";
import { ErrorMessage } from "../../constants/messages";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function Home() {
  //Context
  const {
    actions: { setLoader },
  } = LoaderContext();
  const {
    actions: { setShow: setShowErrorModal, setMessage },
  } = ErrorModalContext();

  const [dogstToShow, setDogsToShow] = useState<Dog[]>([]);
  const [breedsOptions, setBreedsOptions] = useState<SelectItem[]>([]);
  const [currentBreed, setCurrentBreed] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDogs, setTotalDogs] = useState(0);
  const [currSort, setCurrSort] = useState<SortType>(SortType.ASC);
  const [favoritesSet, setFavoritesSet] = useState<Set<string>>(
    new Set<string>()
  );
  const [matchedDog, setMatchedDog] = useState<Dog>();
  const [displayMatch, setDisplayMatch] = useState(false);

  const totalPages = useMemo(() => getMaxNumPages(totalDogs), [totalDogs]);
  const iconName = useMemo(
    () => (currSort === SortType.ASC ? faArrowDownAZ : faArrowDownZA),
    [currSort]
  );
  const showMatchedDog = matchedDog && displayMatch;

  /**
   * Adds/removes DogId to/from the fav set.
   * If it's not in the fav set it's added, otherwise removed
   */
  const handleAddFav = useCallback(
    (favId: string) => {
      const updatedSet = new Set(favoritesSet);
      if (!favoritesSet.has(favId)) {
        updatedSet.add(favId);
      } else {
        updatedSet.delete(favId);
      }
      setFavoritesSet(updatedSet);
    },
    [favoritesSet]
  );

  /**
   * Sorts the current array of dogs to show with the new sort type and set
   * the new sort type
   */
  const handleChangeSort = useCallback(() => {
    const nextValue = currSort === SortType.ASC ? SortType.DESC : SortType.ASC;
    const newSortedDogs = sortDogsAlphabetically(dogstToShow, nextValue);
    setDogsToShow(newSortedDogs);
    setCurrSort(nextValue);
  }, [currSort, dogstToShow]);

  /**
   * Gets the dogsIds of the breed to search, then search the dogs with that ids
   * and set the array of dogsTo show with the received info
   * @param breed breed of dogs to be to searched, if none is passed then
   * gets breeds and take the first position in there
   */
  const handleFetchDogs = useCallback(
    async (breed?: string) => {
      try {
        setLoader(true);
        let breedToSearch;
        if (breed) {
          breedToSearch = breed;
        } else {
          const searchedBreeds = await getBreeds();
          if (breedsOptions.length === 0) {
            setBreedsOptions(generateBreedSelectOptions(searchedBreeds));
          }
          breedToSearch = searchedBreeds[0];
        }
        const recDogsIds = await getDogsIDs(`breeds=${breedToSearch}`, 0);
        setTotalDogs(recDogsIds.total);
        const recDogs = await getDogs(recDogsIds.resultIds);
        const sortedDogs = sortDogsAlphabetically(recDogs, currSort);
        setDogsToShow(sortedDogs);
        setCurrentBreed(breedToSearch);
        setCurrentPage(1);
      } catch (error) {
        setMessage(ErrorMessage.FetchBreed);
        setShowErrorModal(true);
      } finally {
        setLoader(false);
      }
    },
    [breedsOptions.length, currSort, setLoader, setMessage, setShowErrorModal]
  );

  /**
   * Calls function to fetch dogs with the
   */
  const handleBreedChange = useCallback(
    (selectedBreed: string) => {
      if (selectedBreed !== currentBreed) {
        handleFetchDogs(selectedBreed);
      }
    },
    [currentBreed, handleFetchDogs]
  );

  /**
   * Calls to generate a match, get the dog info
   * and displays the result
   */
  const handleGenerateMatch = useCallback(async () => {
    try {
      setLoader(true);
      const matchRes = await matchDogs(Array.from(favoritesSet));
      const recDog = await getDogs([matchRes.match]);
      setMatchedDog(recDog[0]);
      setDisplayMatch(true);
    } catch (error) {
      setMessage(ErrorMessage.GenerateMatch);
      setShowErrorModal(true);
    } finally {
      setLoader(false);
    }
  }, [favoritesSet, setLoader, setMessage, setShowErrorModal]);

  /**
   * Gets the elements pagination needed and performs the requests to get the
   * new dogs to show
   */
  const handlePagination = useCallback(
    async (type: "prev" | "next") => {
      try {
        const { nextOffset, nextPage } = getPageAndOffset(
          type,
          currentPage,
          totalPages
        );
        const recDogsIds = await getDogsIDs(
          `breeds=${currentBreed}`,
          nextOffset
        );
        if (recDogsIds.total !== totalDogs) {
          setTotalDogs(recDogsIds.total);
        }
        const recDogs = await getDogs(recDogsIds.resultIds);
        const sortedDogs = sortDogsAlphabetically(recDogs, currSort);
        setDogsToShow(sortedDogs);
        setCurrentPage(nextPage);
      } catch (error) {
        setMessage(ErrorMessage.DogsPagination);
        setShowErrorModal(true);
      }
    },
    [
      currSort,
      currentBreed,
      currentPage,
      setMessage,
      setShowErrorModal,
      totalDogs,
      totalPages,
    ]
  );

  useEffect(() => {
    handleFetchDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="base-page home-container">
      {showMatchedDog && (
        <MatchModal
          handleOnPress={() => setDisplayMatch(false)}
          dogData={matchedDog}
        />
      )}
      <div className="home-container__actions-container">
        <IconButton
          containerStyles="home-container__sort-container"
          title={currSort}
          iconName={iconName}
          onPress={handleChangeSort}
        />
        <FilterSelect
          options={breedsOptions}
          handleOnChange={(event) => handleBreedChange(event.target.value)}
        />
      </div>
      <div className="home-container__list-container">
        {dogstToShow.map((dog) => (
          <ListCard
            key={dog.id}
            isFav={favoritesSet.has(dog.id)}
            dogData={dog}
            handleOnPress={() => handleAddFav(dog.id)}
          />
        ))}
        <div className="home-container__paginator-container">
          <Paginator
            pagesData={{ total: totalPages, currentPage }}
            handlePagination={handlePagination}
          />
        </div>
      </div>
      <div className="home-container__match-btn-container">
        <CustomButton
          disabled={favoritesSet.size < 1}
          iconName={faPaw}
          title="generate match"
          handlePress={handleGenerateMatch}
        />
      </div>
    </div>
  );
}

export default Home;
