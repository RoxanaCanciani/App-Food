
import React from "react";
//import styles from './Card.module.css'
export default function Card ({name , image , dietTypes, id }) {
   
return (
    <div >
        <div key={id}>
        <h3>{name}</h3>
        <img src = { image? image:'https://image.freepik.com/foto-gratis/tabla-picar-rodeada-verduras-huevos-granos-arroz-escritorio_23-2148062361.jpg' } alt ='img not found' width='200px'  height='250px'/>
        <div > Tipo de dieta= {dietTypes?.map(t => <h5> {t.name}</h5>)} </div> 
        </div>
    </div>
   
)
}