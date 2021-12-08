



export const initialState = {
    recipes: [],
    allRecipes : [],
    details : [],
    dietTypes :[],
    
}
console.log('esto es el estado type diets',initialState.dietTypes);

function rootReducer (state=initialState, action) {
    switch(action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload, 
                allRecipes: action.payload,
                }

        case 'FILTER_BY_DIETTYPES':
            const allRecipe = state.allRecipes;
            const filteredRecipes =action.payload==='All'?allRecipe:
            allRecipe.filter(t => t.dietTypes.find(e =>  e.name === action.payload ))
            console.log(action.payload)
            return {
                ...state,
                recipes: filteredRecipes,
                
               }
        
        
        case 'ORDER_BY_NAME' :
            let order = action.payload === 'asc(a-z)' ? 
            state.recipes.sort(function(a,b) {
                
                if(a.name> b.name) {
                  
                    return 1;
                }
                if( b.name > a.name){
                    return -1;
                }
                return 0;
            }) : 
            state.recipes.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1;
                }
                if( b.name > a.name){
                    return 1;
                }
                return 0;
            })
            return{
                ...state ,
                recipes : order

        }

        case 'ORDER_BY_SCORE':
            let orderScore = action.payload === 'asc(men-may)' ?
            state.recipes.sort(function(a, b){
                if(a.nivelHealth > b.nivelHealth) {
                  
                    return 1;
                }
                if( b.nivelHealth > a.nivelHealth){
                    return -1;
                }
                return 0;
            }) : 
            state.recipes.sort(function(a,b) {
                if(a.nivelHealth > b.nivelHealth) {
                    return -1;
                }
                if( b.nivelHealth > a.nivelHealth){
                    return 1;
                }
                return 0;
            })
            return{
                ...state ,
                recipes : orderScore

        }

        case 'GET_RECIPES_BY_NAME':
            return {
                ...state,
                recipes: action.payload,
            }

        case 'GET_RECIPES_BY_ID':
            return {
                ...state,
                details: action.payload,
            }

        case 'GET_DIET_TYPES':
            return {
                ...state,
                dietTypes: action.payload,

            }  
            
        case 'POST_RECIPE':
            return {
                ...state,
                
            }    

            
        
        default:
            return state;
    }
}
export default rootReducer;