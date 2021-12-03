
const {Diets,Recipe}=require('../db')

const axios= require('axios');
//API Key: apiKey=25536ccc86d742aa961038a1f9e02eda


const getApiInfo= async()=>{
    const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=54a51b42742d43859c5a968ab8e5a7ba&number=100&addRecipeInformation=true");
   
    const apiInfo= await apiUrl.data.results.map(el=>{
        
    return{
        name: el.title,
        id: el.id,
        image: el.image,
        //dishTypes: el.dishTypes.map(el=>el),//tipo de plato
        //dietTypes: el.diets.map(el=>el),//tipo de dieta
        dishTypes: el.dishTypes.map((d)=> {return{name:d}}),
        dietTypes: el.diets.map((d)=> {return{name:d}}),
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



module.exports={getApiInfo, getBdInfo, getAllRecipes}