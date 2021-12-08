import React from "react";
import styles from './Card.module.css'


export default function Card ({id,name, image,dietTypes}) {
  
return ( 
    <div  className={styles.all}>
        
       <div  className={styles.card}>    
        
          <div key={id}>
              <img className={styles.image} src={image?image : 'https://image.freepik.com/foto-gratis/tabla-picar-rodeada-verduras-huevos-granos-arroz-escritorio_23-2148062361.jpg'}alt ='imgage not found' width='200px'  height='250px'/>
          </div>
          <div className={styles.section} >
             <div>{<h1>{name}</h1>}</div>
             <div><h2 > Diet Type: </h2></div>
             <div className={styles.tipes}>{dietTypes.map(el=><h3>{el.name}</h3>)}</div>   
          </div>    
         

        </div> 

    </div>
        
            
   
)
}






