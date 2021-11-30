


// const initialState = {
//     recipes: [],
//     allRecipes : [],
//     details : [],
//     dietTypes :[]

    
// };


// const rootReducer=(state = initialState, action)=>{
//  switch(action.type){
//             case 'GET_RECIPES':
//                 return {
//                     ...state,
//                     recipes: action.payload,
                   
                    
                   

//                    }
//                 //    case 'FILTER_BY_DIETTYPES':
//                 //        const allRecipe = state.allRecipes;
//                 //        const filteredRecipes =action.payload==='all'?allRecipe: 
                    

//                 // }


                   
                   
               

//     }

// }

export const initialState = {
    recipes: [],
    allRecipes : [],
    details : [],
    dietTypes :[],
    types:[]
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
            const filteredRecipes =action.payload==='all'?allRecipe:
            allRecipe.filter(recipe => recipe.dietTypes?.includes(action.payload))
            return {
                ...state,
                recipes: filteredRecipes,
                dietTypes: action.payload


            
            }
        // const allRec = state.allRecipes
        // // const allRec = state.recipes
        // console.log(allRec);
        
        // const typeDietFilter = action.payload === 'All' ? allRec : allRec.filter(e =>  e.dietTypes  === action.payload )   
        // console.log(action.payload);
        
        // return{
        //         ...state ,
        //         recipes : typeDietFilter

        // }
        default:
            return state;
    }
}
export default rootReducer;