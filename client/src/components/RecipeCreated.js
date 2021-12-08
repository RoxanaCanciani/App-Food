import React from "react";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {postRecipes,getDietTypes} from "../actions";
import { Link } from "react-router-dom";
import styles from './RecipeCreated.module.css'

function validate(input){
    let errors = {};
    console.log(errors)
    if(!input.name){
        errors.name = "A name is required";
    }
    if(!input.summary){
        errors.summary = "A summary is required";
    }
    
    return errors;

}


export default function RecipeCreated() {
    const dispatch = useDispatch();//me permite enviar acciones a redux
    const dietTypes = useSelector(state => state.dietTypes);//me permite obtener el state de redux
    const[errors, setErrors] = useState({});
    
//console.log(dietTypes);
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
            dietTypes:input.dietTypes?.filter(dietType => dietType !== e)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postRecipes(input))
        alert('¡Successfully created recipe!')
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
        

        <div className={styles.bkg} >
           <div className={styles.container} >
          <Link to="/home"><h2>Go back</h2></Link>
           
            <div><h1>Create your own repice</h1></div>
            <form className={styles.form} onSubmit={e=>handleSubmit(e)}>
                <div>
                  <h4>Name:</h4>
                  <input type="text" value={input.name} name ="name"
                   onChange={e=>handleChange(e)} />
                    {errors.name && <p >{errors.name}</p>}
                </div>
                <div>

                  <h4>Summary:</h4> 
                  <input  type="text" value={input.summary} name ="summary"
                  onChange={e=>handleChange(e)}/>
                    {errors.summary && <p >{errors.summary}</p>}
                </div>
                <div>
                  <h4>Health Score:</h4>
                  <input  type="text" value={input.healthScore} name ="healthScore"
                  onChange={e=>handleChange(e)}/>
                </div>
                <div>
                  <h4>Health Nivel:</h4>
                  <input type="text" value={input.nivelHealth} name ="nivelHealth"
                  onChange={e=>handleChange(e)}/>
                </div>
                <div>
                  <h4>Step by step:</h4>
                  <input type="text" value={input.stepByStep} name ="stepByStep"
                  onChange={e=>handleChange(e)}/>
                </div>
               
          
                   <select onChange={e=>handleSelect(e)}>
                    {dietTypes?.map((d) => {
                    
                    return <option value={d}>{d} </option>
                    
                    })}
                    
                </select > 
                
              
               {errors.hasOwnProperty('name') || errors.hasOwnProperty('summary')?  <p>Please complete the required fields</p> : <button type='submit'>Create</button>  }  
              
            </form>
            {input.dietTypes?.map(el=>
                <div className={styles.boton}>
                    <p >{el}<button  onClick={()=>{handleDelete(el)}}>X</button></p>
                </div>
                )} 
        </div>
        </div>
    )

}


