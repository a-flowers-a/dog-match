import { useCallback, useEffect, useMemo, useState } from "react";
import { faArrowDownAZ, faPaw } from "@fortawesome/free-solid-svg-icons";
//Components
import ListCard from "../../components/molecules/ListCard";
import IconButton from "../../components/atoms/IconButton";
import FilterSelect from "../../components/molecules/FilterSelect";
import Paginator from "../../components/atoms/Paginator";
import CustomButton from "../../components/atoms/CustomButton";
//helpers
import {
  generateBreedSelectOptions,
  getMaxNumPages,
  getPageAndOffset,
} from "../../helpers/utils";
//Services
import { getBreeds, getDogsIDs, getDogs } from "../../services/dog";
//Types
import { Dog } from "../../types/dog";
import { SelectItem } from "../../types/general";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function Home() {
  const [dogstToShow, setDogsToShow] = useState<Dog[]>([]);
  const [breedsOptions, setBreedsOptions] = useState<SelectItem[]>([]);
  const [currentBreed, setCurrentBreed] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDogs, setTotalDogs] = useState(0);

  const [dogsIds, setDogsIds] = useState<string[]>([]);

  const totalPages = useMemo(() => getMaxNumPages(totalDogs), [totalDogs]);

  /**
   * Gets the dogsIds of the breed to search, then search the dogs with that ids
   * and set the array of dogsTo show with the received info
   * @param breed breed of dogs to be to searched, if none is passed then
   * gets breeds and take the first position in there
   */
  const handleFetchDogs = useCallback(
    async (breed?: string) => {
      try {
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
        console.log("recDogsIds>>", recDogsIds);
        setDogsIds(recDogsIds.resultIds);
        setTotalDogs(recDogsIds.total);
        const recDogs = await getDogs(recDogsIds.resultIds);
        console.log("recDogs>>", recDogs);
        setDogsToShow(recDogs);
        setCurrentBreed(breedToSearch);
      } catch (error) {
        console.log("error at handleFetchDogs", error);
      }
    },
    [breedsOptions.length]
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

  const handlePagination = useCallback(
    async (type: "prev" | "next") => {
      try {
        //TODO:offset must be in the request to getDogsIds
      } catch (error) {
        console.log("error at handlePagination", error);
      }
    },
    [currentPage, totalPages]
  );

  useEffect(() => {
    handleFetchDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="base-page home-container">
      <div className="home-container__actions-container">
        <IconButton
          containerStyles="home-container__sort-container"
          title="Sort DSC"
          iconName={faArrowDownAZ}
          onPress={() => null}
        />
        <FilterSelect
          options={breedsOptions}
          handleOnChange={(event) => handleBreedChange(event.target.value)}
        />
      </div>
      <div className="home-container__list-container">
        {dogstToShow.map((dog) => (
          <ListCard key={dog.id} dogData={dog} />
        ))}
        <div className="home-container__paginator-container">
          <Paginator
            pagesData={{ total: 30, currentPage: 1 }}
            handlePagination={handlePagination}
          />
        </div>
      </div>
      <div className="home-container__match-btn-container">
        <CustomButton
          iconName={faPaw}
          title="generate match"
          handlePress={() => null}
        />
      </div>
    </div>
  );
}

export default Home;
