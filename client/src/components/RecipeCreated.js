import React from "react";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {postRecipes,getDietTypes} from "../actions";
import { Link } from "react-router-dom";

function validate(input){
    let errors = {};
    console.log(errors)
    if(!input.name){
        errors.name = "Se requiere un nombre";
    }
    if(!input.summary){
        errors.summary = "Se requiere una descripción";
    }
    
    return errors;

}


export default function RecipeCreated() {
    const dispatch = useDispatch();//me permite enviar acciones a redux
    const dietTypes = useSelector(state => state.dietTypes);//me permite obtener el state de redux
    const[errors, setErrors] = useState({});
    
console.log(dietTypes);
    const[input,setInput] = useState({

        name:"",
        summary:"",
        healthScore:"",
        nivelHealth:"",
        stepByStep:"",
        dietTypes:[],

    })
    

    useEffect(()=>{
        dispatch(getDietTypes());
    },[])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }) )
    }

    

    function handleSelect(e){
        setInput({
            ...input,
            dietTypes:[...input.dietTypes, e.target.value]
        })
    }

    function handleDelete(e){
        setInput({
            ...input,
            dietTypes:input.dietTypes.filter(dietType => dietType !== e)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postRecipes(input))
        alert('¡Su receta ha sido creada!')
        setInput({
            name :'',
            summary:'',
            healthScore:'',
            nivelHealth:'',
            stepByStep:'',
            dietTypes:[]
        })
     
    }

    return (
        <div>
            <Link to="/home">Volver</Link>
            <h1>Crea tu propia receta</h1>
            <form  onSubmit={e=>handleSubmit(e)}>
                <div>
                  <label>Nombre:</label>
                  <input type="text" value={input.name} name ="name"
                   onChange={e=>handleChange(e)} />
                    {errors.name && <p>{errors.name}</p>}

                </div>
                <div>
                  <label>Resumen:</label>
                  <input type="text" value={input.summary} name ="summary"
                  onChange={e=>handleChange(e)}/>
                    {errors.summary && <p>{errors.summary}</p>}
                </div>
                <div>
                  <label>Puntaje de salud:</label>
                  <input type="text" value={input.healthScore} name ="healthScore"
                  onChange={e=>handleChange(e)}/>
                </div>
                <div>
                  <label>Nivel de salud:</label>
                  <input type="text" value={input.nivelHealth} name ="nivelHealth"
                  onChange={e=>handleChange(e)}/>
                </div>
                <div>
                  <label>Paso a paso:</label>
                  <input type="text" value={input.stepByStep} name ="stepByStep"
                  onChange={e=>handleChange(e)}/>
                </div>
               
          
                   <select onChange={e=>handleSelect(e)}>
                    {dietTypes?.map((d) => {
                    
                    return <option value={d.name}> {d.name} </option>
                    
                    })}
                    
                </select > 
                
              
               {errors.hasOwnProperty('name') || errors.hasOwnProperty('summary')?  <p>Por favor complete los campos de nombre y resumen para poder crear su receta</p> : <button type='submit'>Cree su receta</button>  }  
              
            </form>
            {input.dietTypes.map(el=>
                <div>
                    <p>{el}</p>
                    <button onClick={()=>{handleDelete(el)}}>X</button>
                </div>
                )}
        </div>
    )

}


