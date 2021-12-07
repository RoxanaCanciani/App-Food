const { Router } = require('express');
const axios= require('axios');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diets =require('../Api_Db_Info/diets') ;
const {getAllRecipes}=require('../Api_Db_Info/dataAll');
const {DietTypes,Recipe}=require('../db');
const {json} = require('body-parser');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get("/recipes", async (req, res)=>{
    const {name}=req.query;
    let totalRecipes= await getAllRecipes();
    if(name){
        let recipeName = await totalRecipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
    
    recipeName.length ?
        res.status(200).send(recipeName): res.status(404).send("The recipe does not exist")
    }else{
        res.status(200).send(totalRecipes);
    }
})








router.get('/recipes/:id',async (req,res) =>{
    const {id} = req.params
    const allRecipes = await getAllRecipes()
  
    let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos

    if (validate) {
      try {
        let dbId = await Recipe.findByPk(id, { include: DietTypes });  // entonce la busco directo de la base de datos
        res.status(200).json([dbId]);
      } catch (err) {
        console.log(err);
      }
    }
    
else {
    try {
      if (id) {
        let recipeId = await allRecipes.filter((el) => el.id === parseInt(id)
        );
     
        recipeId.length? res.status(200).send(recipeId)
          : res.status(400).send("Not fuound");
      }
    } catch (err) {
      res.json({ message: err });
    }
  }
});





 

    router.get('/types', async (req,res) => {
       
            diets.forEach(e => {
                DietTypes.findOrCreate({//busca si existe el elemento en la base de datos
                    where: {e : e.name }
                })
            })
            
             const allTheTypes = await DietTypes.findAll();//trae todos los tipos de dieta
            //res.send(allTheTypes)
            res.send(allTheTypes.map(e => e.name))
            
    })

    
    
    






router.post('/recipe', async (req,res) => {
    let {
        name,
        summary,
        healthScore,
        nivelHealth,
        stepByStep,
        createdInBd,
        dietTypes,
        
    } = req.body;
    if(!name || !summary) {
        return res.status(400).send('Please complete to continue...') ;
    }
    
let createRecipe = await Recipe.create({
          
        name,
        summary,
        healthScore,
        nivelHealth,
        stepByStep,
        createdInBd,
})
let dietTypeDb = await DietTypes.findAll({ //busca todos los tipos de dieta
    where:{ name:dietTypes } })//busca los tipos de dieta en la base de datos
    createRecipe.addDietTypes(dietTypeDb)//agrega los tipos de dieta a la receta que estoy creando
    res.status(200).send('Recipe successfully created')  


});



module.exports = router;


