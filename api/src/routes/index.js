const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios= require("axios");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo=async()=>{
    const apiUrl = await axios.get(" https://api.spoonacular.com/recipes/complexSearch?apiKey=036e3cd4d5d94756a9eb16db58682da4&addRecipeInformation=true");
const apiInfo= await apiUrl.data.map(el=>{
    return{
        name: el.title,
        id: el.id,
        image: el.image,
        dishTypes: el.dishTypes.map(el=>el),
        dietTypes: el.diets.map(el=>el),
        summary: el.summary,
        healthScore: el.healthScore,
        nivelHealth: el.veryHealthy,
        stepByStep: el.analizedInstructions.map(el=>el)

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
    const apiInfo= getApiInfo();
    const bdInfo= getBdInfo();
    const allInfo= apiInfo.concat(bdInfo);
    return allInfo;
}

module.exports = router;
