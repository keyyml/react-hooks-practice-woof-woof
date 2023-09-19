import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";
// id, name, isGoodDog, image
function App() {
  const [dogArr, setDogArr] = useState([])
  const [showInfo, setShowInfo] = useState({})
  const [dogBehavior, setDogBehavior] = useState(false)
  const [goodDog, setGoodDog] = useState(false)

  useEffect( () => {
    fetch('http://localhost:3001/pups')
    .then(resp => resp.json())
    .then(data => setDogArr(data))
  }, [])

  const filteredDogArr = dogArr.filter((dog) => {
    if (goodDog) {
      return dog.isGoodDog
    } 
    else{
      return true
    }
  })
   

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setGoodDog(!goodDog)}>
          Filter good dogs: { goodDog ? "ON" : "OFF"}
          </button>
      </div>
      <DogBar dogArr={ dogArr } setShowInfo={ setShowInfo } setDogBehavior={ setDogBehavior } filteredDogArr={ filteredDogArr }/>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogInfo showInfo={ showInfo }setDogBehavior={ setDogBehavior } dogBehavior={ dogBehavior }/>
      </div>
    </div>
  );
}

export default App;
