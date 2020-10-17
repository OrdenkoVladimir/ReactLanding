import React from "react";

const Categories = ( {selectCategorie, handlerTopGames} ) => {

    const handlerCategorie = (item) => {
        selectCategorie(item);
        handlerTopGames(false)
    }
    const callFunctionTopGames = () => {
        handlerTopGames(true)
        
        
    }
    
    return (
        <div className="categories">
            <div className="categories_item" onClick={() => handlerCategorie('All%20Games')}>
                <span>ALL GAMES</span>
            </div>
            <div className="categories_item" onClick={() => callFunctionTopGames()}>
                <span>TOP GAMES</span>
            </div>
            <div className="categories_item" onClick={() => handlerCategorie('Live%20Casino')}>
                <span>LIVE CASINO</span>
            </div>
            <div className="categories_item" onClick={() => handlerCategorie('Slot')}>
                <span>Slots Games</span>
            </div>
            <div className="categories_item" onClick={() => handlerCategorie('Roulette')}>
                <span>Roulette</span>
            </div>
            <div className="categories_item" onClick={() => handlerCategorie('Virtual%20Sports')}>
            <span>Table Games</span>
            </div>
            <div className="categories_item" onClick={() => handlerCategorie('Card%20Games')}>
            <span>Card Games</span>
            </div>
        </div>
    )
}


export default Categories