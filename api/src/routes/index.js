const { Router } = require('express');
const axios= require('axios');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diets =require('../Api_Db_Info/diets') ;
const {getAllRecipes}=require('../Api_Db_Info/dataAll');
const {Diets,Recipe}=require('../db');
const {json} = require('body-parser');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get('/recipes', async (req, res) => {
//     const apiInfo= await getAllRecipes();
//     res.json(apiInfo);
//     });




router.get("/recipes", async (req, res)=>{
    const {name}=req.query;
    let totalRecipes= await getAllRecipes();
    if(name){
        let recipeName = await totalRecipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
    
    recipeName.length ?
        res.status(200).send(recipeName): res.status(404).send("No existe ninguna receta con ese nombre")
    }else{
        res.status(200).send(totalRecipes);
    }
})

router.get('/recipes/:id', async (req, res)=>{
const {id}=req.params;
let totalRecipes= await getAllRecipes();

let theRecipe= totalRecipes.find(r=>r.id===parseInt(id))
if(theRecipe){
    res.status(200).send(theRecipe)  
}else{
    res.status(404).send("No existe ninguna receta con ese id")
}
})
 

    router.get('/types', async (req,res) => {
       console.log(diets)
            diets.forEach(e => {
                Diets.findOrCreate({
                    where: {name:e.name}
                })
            })
            
             const allTheTypes = await Diets.findAll();
            res.send(allTheTypes)
            
    })
    






router.post('/recipe', async (req,res) => {
    let {
        name,
        summary,
        healthScore,
        spoonacularScore,
        stepByStep,
        createdInDb,
        dietTypes,
        
    } = req.body;
    if(!name || !summary) {
        return res.status(400).send('Inserte un nombre y una descripcion para continuar') ;
    }
    
let createRecipe = await Recipe.create({
          
        name,
        summary,
        healthScore,
        spoonacularScore,
        stepByStep,
        createdInDb,
})
let dietTypeDb = await Diets.findAll({ where:{ name:dietTypes } })
    createRecipe.addDiets(dietTypeDb)
    res.status(200).send('Receta creada exitosamente')  


});



module.exports = router;
