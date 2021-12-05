import React from "react";
import styles from './Paged.module.css'

export default function Paged({recipesPerPage,allRecipes, paged}){
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++){
        pageNumbers.push(i );
    }
    
    return(
        <nav>
            <ul className={styles.ul}>
                { pageNumbers?.map(number => (
                    <li  key={number}>
                    <a className={styles.container}  onClick={()=> paged(number)} >{number}</a>
                    </li>
                ))}
                </ul>
        </nav>
        )

}

