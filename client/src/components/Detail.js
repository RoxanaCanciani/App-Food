import React from 'react';
import {getRecipesById} from '../actions';
import{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



export default function Detail (){
  const   {id} = useParams()
  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(getRecipesById(id))
  }, [dispatch, id])
  
     
  //useEffect (() => {dispatch(getRecipesById(id))} ,[]) 
 const details = useSelector((state) => state.details)
 console.log('estos son los detalles',details);
 const Diets= useSelector((state) => state.dietTypes)
  
  
  return (
      <div>
       
     { 
       details? 
       //console.log('acaaaa', details[0].name)
       
       <div> 
           <Link to='/home'><button>Volver </button> </Link>
            
           <h1> {details.name} </h1>
          <img  src={details.image ? details.image :'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'}/>
          <h3> Tipo de dieta: </h3>
        {/*<h3> {details.dietTypes?.map(t => t.name)}</h3>*/}
          <h4> {!details.createdInBd?details.dietTypes?.map(el=>el.name) :Diets.map(el=>el.name+ (''))}</h4>
          <h4> Tipo de plato:</h4>
           <h4 > {details.dishTypes ? details.dishTypes.map(d => d.name) :'Este tipo de plato no se encuentra'  }</h4>
            <h4> Resumen:</h4>
           <h5 > {details.summary}</h5>
           <h5 >Puntaje de salud: {details.healthScore}</h5>
           <h5 >Nivel de salud: {details.nivelHealth}</h5>
          
       </div> : 
       
       <div> <h2> loading... </h2> </div>

    }
        </div>
    )
}



// export  default function Detail(){
//   let{id} = useParams();
 
//   const dispatch = useDispatch() 

//   useEffect(() => {
//     dispatch(getRecipesById(id))
//   }, [])



//   // useEffect(() => {
//   //    dispatch(getRecipesById(props.match.params.id))
//   //    }, [dispatch])
     


//     const details= useSelector(state => state.details);

//     return(
//      <div>
//          <Link to="/home">Volver</Link>
//        {
//          details?
//             <div>
//                 <h1>Nombre:{details.name}</h1>
//                 <h2>Resumen:{details.summary}</h2>
//                <img src = { details.image? details.image:'https://image.freepik.com/foto-gratis/tabla-picar-rodeada-verduras-huevos-granos-arroz-escritorio_23-2148062361.jpg' } alt ='img not found' width='200px'  height='250px'/>
//                 <h2>Tipo de dieta:{details.crea} </h2>
//                 {/*<h2>Tipo de plato: {details[0].dietTypes.map(t => t.name)}</h2>
//                 <h2>Puntuacion:{details[0].healthScore}</h2>
//                 <h2>Nivel de comida saludable:{details.nivelHealth}</h2>
//        <h2>Paso a paso:{details.stepByStep}</h2> */}



//             </div> :
//              <div> <h2> loading... </h2> </div>  
         
//        }
//      </div>
    
//     )
// }