
const {Diets,Recipe}=require('../db')

const axios= require('axios');
//607c2c81c43a4ad7bdf893e297791810


const getApiInfo= async()=>{
    const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=474ca7b414c34a9c90a943bc5bf9b452&number=100&addRecipeInformation=true");
   
    const apiInfo= await apiUrl.data.results.map(el=>{
        
    return{
        name: el.title,
        id: el.id,
        image: el.image,
        dishTypes: el.dishTypes.map(el=>el),//tipo de plato
        dietTypes: el.diets.map(el=>el),//tipo de dieta
        //dishTypes: el.dishTypes.map((d)=> {return{name:d}}),
        //dietTypes: el.diets.map((d)=> {return{name:d}}),
        summary: el.summary, //resumen
        healthScore: el.healthScore, //puntuacion
        nivelHealth: el.spoonacularScore,// nivel de comida saludable
        stepByStep: el.analyzedInstructions //paso a paso.

    };
});

return apiInfo;
}

const getBdInfo= async()=>{
    
    return await Recipe.findAll({
        include:{
            model:Diets,
            attributes:['name'],
            througth:{
                attributes:[],
            },
        },
    });

}
const getAllRecipes= async()=>{
    const apiInfo= await getApiInfo();
    const bdInfo= await getBdInfo();
    const allInfo= apiInfo.concat(bdInfo);

    return allInfo;
}  


// const getApirecipeId = async (id) => {
//     const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=9f13da391cb04b7086e47de9a9fbcde0`); 
//     const apiInfo= await apiUrl.data;
//     const recipeInfo= {
//         name: apiInfo.title,
//         id: apiInfo.id,
//         image: apiInfo.image,
//         dishTypes: apiInfo.dishTypes.map(el=>el),//tipo de plato
//         dietTypes: apiInfo.diets.map(el=>el),//tipo de dieta
//         summary: apiInfo.summary, //resumen
//         healthScore: apiInfo.healthScore, //puntuacion
//         nivelHealth: apiInfo.spoonacularScore,// nivel de comida saludable
//         stepByStep: apiInfo.analyzedInstructions //paso a paso.

//     };
//     return recipeInfo;
// }



module.exports={getApiInfo, getBdInfo, getAllRecipes}