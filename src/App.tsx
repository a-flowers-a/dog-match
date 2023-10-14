import ListCard from "./components/molecules/ListCard";

function App() {
  return (
    <div className="App">
      <ListCard
        dogData={{
          name: "Balto",
          img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
          id: "id1",
          age: 15,
          zip_code: "54910",
          breed: "Golden Retriever",
        }}
      />
    </div>
  );
}

export default App;
