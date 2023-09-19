import React from 'react'

function DogBar({ dogArr, setShowInfo, setDogBehavior, filteredDogArr }){


const dogBar = filteredDogArr.map((dog) => {
    
     return(
        <span onClick={(e) => (setShowInfo(dog), setDogBehavior(dog.isGoodDog))} key={dog.id} value={dog.name}>{dog.name}</span>
    )
})

    return(
        <div id="dog-bar">
            {dogBar}
        </div>
    )
}

export default DogBar;