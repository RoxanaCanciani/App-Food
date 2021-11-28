import React, { Fragment } from 'react';
//import {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes} from '../actions'
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

function Home() {
   
     const dispatch = useDispatch(); 
     const allRecipes = useSelector(state => state.recipes); 
     
     useEffect(() => {
         dispatch(getRecipes());
     }, [dispatch]);

    function handleClick(e) {//me resetea el state, trae todo de nuevo
        e.preventDefault();
        dispatch(getRecipes());
    }console.log(allRecipes);

    return (
        <div>
            <Link to="/recipe">
                Crea tu propia receta
            </Link>
            <h1>Recetas</h1>
            
            <button onClick={handleClick}>volver a cargar las recetas</button> {/*creo una funcion para que cuando haga click en el boton, se ejecute la funcion handleClick*/}
        <div>
         <select>
             <option value="asc(a-z)"> Por orden alfabetico ascendente</option>
             <option value="desc(z-a)">Por orden alfabetico descendente</option> {/*creo un select para ordenar las recetas por orden alfabetico */}
         </select>
        </div>
        <div>
        <select>
            <option value="asc(men-may)">Puntuacion de menor a mayor</option>
            <option value="desc(may-men)">Puntuacion de mayor a menor</option>
        </select>
        </div>
        <div>
         <select>
                <option value="all">Tipos de dieta</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="lacto-vegetarian">Lacto-Vegetarian</option>
                <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="primal">Primal</option>
                <option value="low fodmap">Low Fodmap</option>
                <option value="whole 30">Whole 30</option>
         </select>

        </div>
         {
        allRecipes?.map((el) => {
            return(
                <Fragment>
            
                <Link to={'/recipes/' + el.id}>
                <Card  image={el.image} name={el.name} dietTypes={el.dietTypes} key={el.id}/>
                </Link>
                </Fragment>
                
        )})} 
        
        </div>


    )
    
    

}
export default Home;


    
    //     function mapStateToProps(state) {
    //         return {
    //             recipes: state.recipes
    //         }
    //     }
    //     function mapDispatchToProps(dispatch) {
    //         return {
    //             getRecipes: () => dispatch(getRecipes())
    //         }
    //     }
    
    
    // export default connect(mapStateToProps, mapDispatchToProps)(Home);
    


