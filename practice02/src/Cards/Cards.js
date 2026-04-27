import React from "react";
import '../Cards/Cards.css'

const Cards = props =>{

    // return( <div>
    //      <h4>{title}</h4>
    //      <p>{description}</p>
    // </div>

    return (
        <>
            {props.cardsData.map((card)=>{
            <h4>{card.title}</h4>
            })}
        </>
    )
// )
}

export default Cards;