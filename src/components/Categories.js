import React from "react";

const CATEGORIES = [
    {
        title: 'ALL GAMES',
        categoryName: 'All%20Games'
    },
    {
        title: 'TOP GAMES',
        categoryName: 'Top'
    },
    {
        title: 'LIVE CASINO',
        categoryName: 'Live%20Casino'
    },
    {
        title: 'Slots Games',
        categoryName: 'Slot'
    },
    {
        title: 'Roulette',
        categoryName: 'Roulette'
    },
    {
        title: 'Table Games',
        categoryName: 'Virtual%20Sports'
    },
    {
        title: 'Card Games',
        categoryName: 'Card%20Games'
    }
]

const Categories = ( {onSelectCategory} ) => {

    return (

        <div className="categories">
            {
                CATEGORIES.map((category, index) => (
                    <div key={index} className="categories_item" onClick={() => onSelectCategory(category.categoryName)}>
                        <span>{category.title}</span>
                    </div>
                ))
            }
        </div>

    )
}


export default Categories