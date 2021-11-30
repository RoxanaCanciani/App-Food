import axios from 'axios';
const GET_RECIPES = 'GET_RECIPES';
const FILTER_BY_DIETTYPES='FILTER_BY_DIETTYPES';
const ORDER_BY_NAME='ORDER_BY_NAME';
const ORDER_BY_SCORE='ORDER_BY_SCORE';
const GET_RECIPES_BY_NAME='GET_RECIPES_BY_NAME';
const GET_RECIPES_BY_ID='GET_RECIPES_BY_ID';
const GET_DIET_TYPES='GET_DIET_TYPES';
const POST_RECIPE='POST_RECIPE';

export function getRecipes(){
    
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type : GET_RECIPES,
            payload: json.data,
            
        }) 
    }  
} 

export function filterByDietTypes (payload){
  console.log(payload)
    return(
        {
            type:FILTER_BY_DIETTYPES,
            payload
        })
    
}

export function orderByName (payload){
    return {
        type : ORDER_BY_NAME,
        payload,
    }
}

export function orderByScore (payload){
    return {
        type : ORDER_BY_SCORE,
        payload,
    }
}

export function getRecipesByName(name){
    return async function(dispatch){
        try{
            var json= await axios.get(`http://localhost:3001/recipes?name=${name}` );
            return dispatch({
                type: GET_RECIPES_BY_NAME,
                payload: json.data,
            })
        }catch(err){
            console.log(err)
        }
        }
}

export function getRecipesById(id){
    return async function(dispatch){
        try{
            var json= await axios.get(`http://localhost:3001/recipes?id=${id}` );
            return dispatch({
                type: GET_RECIPES_BY_ID,
                payload: json.data,
            })
        }catch(err){
            console.log(err)
        }
        }
}

export function getDietTypes(){
    return async function(dispatch){
        try{
            var json= await axios.get(`http://localhost:3001/Types` );
            return dispatch({
                type: GET_DIET_TYPES,
                payload: json.data,
            })
        }catch(err){
            console.log(err)
        }
        }
}

export function postRecipe(payload){
    return async function(dispatch){
        try{
            var json= await axios.post(`http://localhost:3001/recipes`, payload );
            return dispatch({
                type: POST_RECIPE,
                payload: json.data,
            })
        }catch(err){
            console.log(err)
        }
        }
}

