
const {Diets,Recipe}=require('../db')

const axios= require('axios');
//API Key: apiKey=1ef0fdff73524f0fbdbd0096e0ce18ab
//         apiKey=036e3cd4d5d94756a9eb16db58682da4
//apiKey=5107f5cac80c443a973709919c419c3f


const getApiInfo= async()=>{
    const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=036e3cd4d5d94756a9eb16db58682da4&number=100&addRecipeInformation=true");
   
    const apiInfo= await apiUrl.data.results.map(el=>{
        
    return{
        name: el.title,
        id: el.id,
        image: el.image,
        dishTypes: el.dishTypes.map(el=>el),//tipo de plato
        dietTypes: el.diets.map(el=>el),//tipo de dieta
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