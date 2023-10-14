import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
//Components
import ListCard from "../../components/molecules/ListCard";
import IconButton from "../../components/atoms/IconButton";
import FilterSelect from "../../components/molecules/FilterSelect";
//Types
import { Dog } from "../../types/dog";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function Home() {
  const dogList: Dog[] = [
    {
      name: "Balto",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      id: "id1",
      age: 15,
      zip_code: "54910",
      breed: "Golden Retriever",
    },
    {
      name: "Duqe",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      id: "id2",
      age: 15,
      zip_code: "54910",
      breed: "Golden Retriever",
    },
    {
      name: "Juan Gabriel",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      id: "id3",
      age: 15,
      zip_code: "54910",
      breed: "Golden Retriever",
    },
    {
      name: "Buba",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      id: "id4",
      age: 15,
      zip_code: "54910",
      breed: "Golden Retriever",
    },
    {
      name: "Gorda",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      id: "id5",
      age: 15,
      zip_code: "54910",
      breed: "Golden Retriever",
    },
  ];
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
          options={[
            {
              value: "labrador",
              label: "labrador",
            },
            {
              value: "golden",
              label: "golden",
            },
            {
              value: "poochie",
              label: "poochie",
            },
          ]}
          handleOnChange={(event) => console.log(event.target.value)}
        />
      </div>
      <div className="home-container__list-container">
        {dogList.map((dog) => (
          <ListCard key={dog.id} dogData={dog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
