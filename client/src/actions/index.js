import axios from 'axios';
const GET_RECIPES = 'GET_RECIPES';
const FILTER_BY_DIETTYPES='FILTER_BY_DIETTYPES'


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

