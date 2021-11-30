import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { useEffect } from "react";
//import { useSelector } from "react-redux";
import {getRecipesByName} from "../actions";

export default function SearchBar() {
    const dispatch=useDispatch();
    const [searchName, setSearchName] = useState("");


function handleInputChange(e) {
    e.preventDefault ();
    setSearchName(e.target.value);

   }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getRecipesByName(searchName));
    }

    return (
        <div>
            <input type="text" placeholder="Buscar por nombre..." value={searchName}  onChange={e=>handleInputChange(e)} />
            <button type="submit" onClick={e=>{handleSubmit(e)}}>Buscar</button>
        </div>
    )
}