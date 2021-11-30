import React from "react";

export default function Paged({recipesPerPage,allRecipes, paged}){
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++){
        pageNumbers.push(i );
    }
    
    return(
        <nav>
            <ul className='paged'>
                { pageNumbers?.map(number => (
                    <li className='number' key={number}>
                    <a onClick={()=> paged(number)} >{number}</a>
                    </li>
                ))}
                </ul>
        </nav>
        )

}

