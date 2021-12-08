

import React from 'react';
import {getRecipesById} from '../actions';
import{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';


export default function Detail (){
  const   {id} = useParams()
  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(getRecipesById(id))
  }, [dispatch, id])
  
      
 const details = useSelector((state) => state.details)
 console.log('estos son los detalles',details);
 //const Diets= useSelector((state) => state.dietTypes)
  
  
  return (
      <div className={styles.fondo}>
       
     { 
       details? 
       
       
       <div> 
          <Link to="/home"><h4>Go back</h4></Link>
          
            
          <div className={styles.title} >{<h1>{details[0]?.name}</h1>}</div>
          <img className={styles.img} src={details[0]?.image? details[0]?.image : 'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'}alt ='imgage not found' width='300px'  height='350px'/>
           <div className={styles.title}><h2 > Diet Type: </h2>
            {details[0]?.dietTypes?.map(el=><h3>{el.name + (' ')}</h3>)}</div>
            <div className={styles.title}><h2> Dish Type:</h2></div>
            <div className={styles.title}>{details[0]?.dishTypes?.map(el=><h3>{el.name + (' ')}</h3>)}</div>
            <div className={styles.title}><h2> Summary:</h2></div>
            <div className={styles.summary}>{<h3>{details[0]?.summary}</h3>}</div>
            <div className={styles.detail}><h2>Healt Score:</h2> {<h3>{details[0]?.healthScore}</h3>}</div>
            <div className={styles.detail}><h2>NivelHealth:</h2> {<h3>{details[0]?.nivelHealth}</h3>}</div>
            <div className={styles.detail}><h2> Step By Step:</h2></div>
            <div className={styles.summary}>{<h3>{details[0]?.summary}</h3>}</div>
           
          
       </div> : 
       
       <div> <h2> loading... </h2> </div>

    }
        </div>
    )
}









