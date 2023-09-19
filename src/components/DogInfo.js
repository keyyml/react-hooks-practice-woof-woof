import React, { useState } from 'react'

function DogInfo({ showInfo, setDogBehavior, dogBehavior }){

    // const doggyGood = showInfo.isGoodDog

    return(

        <div id="dog-info">
            <img src={showInfo.image} alt={showInfo.name} />
            <h2>{showInfo.name}</h2>
            {showInfo.id && <button onClick={(e) => setDogBehavior(!dogBehavior)}>{ dogBehavior ? "Good Dog!" : "Bad Dog!"}</button>}
        </div>
    )
}

export default DogInfo