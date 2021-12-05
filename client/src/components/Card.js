import React from "react";
import styles from './Card.module.css'
import { useSelector } from "react-redux";




export default function Card ({name , image , dietTypes, id }) {

    const details = useSelector((state) => state.details)
    console.log('estos son los detalles',details);
  
     


   
return ( 
    <div>
        {
            details?
        <div  key={id}>
          <h3>{name}</h3>
          <img  src = {image?image:'https://image.freepik.com/foto-gratis/tabla-picar-rodeada-verduras-huevos-granos-arroz-escritorio_23-2148062361.jpg' } alt ='img not found' width='200px'  height='250px'/>
          <h4>Diet Type: </h4>
          {/*<h4>{!details.createdInBd?details.dietTypes?.map(el=><h4>{el}</h4>) :details.Diets.map(el=><h4>{el.name+ ('')}</h4>)}</h4>*/}
          <div className={styles.title}>{!details.createdInBd? <h3>{details[0]?.dietTypes?.map(el=><h4>{el + (' ')}</h4>)}</h3>:details?.Diets.map(el=><h4>{el.name + (' ')}</h4>)}</div>
               
                
        </div> :<div> <h2> loading... </h2> </div>
}
    </div>
        
            
   
)
}









// import React from "react";
// import styles from './Card.module.css'
// import { useSelector } from "react-redux";



// export default function Card ({name , image , dietTypes, id }) {
//     const details = useSelector((state) => state.details)
// //     console.log('estos son los detalles',details);
   
// return (
//     <div>
//         {
//             details?
//         <div  key={id}>
//           <h3>{name}</h3>
//           <img  src = { image? image:'https://image.freepik.com/foto-gratis/tabla-picar-rodeada-verduras-huevos-granos-arroz-escritorio_23-2148062361.jpg' } alt ='img not found' width='200px'  height='250px'/>
//                 {/*<div>Diet Type= {dietTypes?.map(t => <h4>{t}</h4>)}</div>*/}
//                 <h4> {!details.createdInBd?details.dietTypes?.map(el=><h4>{el}</h4>):details.Diets.map(el=>el.name+ (''))}</h4>
//         </div> :<div> <h2> loading... </h2> </div>
//    }
//     </div>
        
    
   
// )
// }