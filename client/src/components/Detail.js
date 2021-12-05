

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
      <div>
       
     { 
       details? 
       
       
       <div> 
          <Link to="/home"><h4>Go back</h4></Link>
            
          <div className={styles.title} >{!details.createdInBd? <h1>{details[0]?.name}</h1>:<h1>{details?.name}</h1>}</div>
          <img  src={!details.createdInBd? details[0]?.image : 'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'}/>
           <div className={styles.title}><h3 > Diet Type: </h3></div>
            <div className={styles.title}>{!details.createdInBd? <h3>{details[0]?.dietTypes?.map(el=><h4>{el + (' ')}</h4>)}</h3>:details?.Diets.map(el=><h4>{el.name + (' ')}</h4>)}</div>
            <div className={styles.title}><h3> Dish Type:</h3></div>
            <div className={styles.title}>{!details.createdInBd? <h3>{details[0]?.dishTypes?.map(el=><h4>{el + (' ')}</h4>)}</h3>:details.DishTypes?.map(el=><h4>{el.name + (' ')}</h4>)}</div>
            <div className={styles.title}><h3> Summary:</h3></div>
            <div className={styles.title}>{!details.createdInBd? <h3>{details[0]?.summary}</h3>:<h3>{details.summary}</h3>}</div>
            <h4 >Healt Score: {!details.createdInBd ?<h4>{details[0]?.healthScore}</h4>:<h4>{details?.healthScore}</h4>}</h4>
            <h4 >Ingredients: {!details.createdInBd ?<h4>{details[0]?.nivelHealth}</h4>:<h4>{details?.nivelHealth}</h4>}</h4>
            
           
          
       </div> : 
       
       <div> <h2> loading... </h2> </div>

    }
        </div>
    )
}









