import React, { Fragment } from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes,filterByDietTypes,orderByName,orderByScore} from '../actions'
import { Link } from 'react-router-dom';
import Card from './Card';
import Paged from './Paged';
import SearchBar from './SearchBar';

function Home() {
   
    //  const dispatch = useDispatch(); 
    //  const allRecipes = useSelector(state => state.recipes); 
     
    const dispatch = useDispatch();
const allRecipes = useSelector((state) => state.recipes )
//const dietTypes = useSelector((state) => state.dietTypes )


    

    useEffect(() => {
        dispatch(getRecipes())   // hook del matchDispatchToProps()
    },[dispatch]);


     const[order,setOrder] =useState('') 
     const[orderScore,setOrderScore] =useState('')
     const[currentPage, setCurrentPage] = useState(1);
     const[recipesPerPage, setRecipesPerPage] = useState(9);
     const lastRecipe = currentPage * recipesPerPage;
     const firstRecipe = lastRecipe - recipesPerPage;
     const currentRecipes = allRecipes.slice(firstRecipe, lastRecipe);
     console.log(currentRecipes);

     const paged = (pageNumber) => {
            setCurrentPage(pageNumber);
        }


    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }
    

    function handleFilterByDietTypes (e) {
        e.preventDefault();
        dispatch(filterByDietTypes(e.target.value))
    }

    function handleSortName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);//resetea la pagina a 1
        setOrder(`Ordenado ${e.target.value}`)//es un estado que me setea el orden
    }

    function handleSortScore(e){
        e.preventDefault();
        dispatch(orderByScore(e.target.value))
        setCurrentPage(1);//resetea la pagina a 1
        setOrderScore(`Ordenado ${e.target.value}`)//es un estado que me setea el orden
    }



    return (
        <div>
            <Link to="/recipe">
                Crea tu propia receta
            </Link>
            <h1>Recetas</h1>
            
            <button onClick={e=>handleClick(e) }>volver a cargar las recetas</button> {/*creo una funcion para que cuando haga click en el boton, se ejecute la funcion handleClick*/}
        <div>
         <select onChange={e=>handleSortName(e) }>
             <option value="asc(a-z)"> Por orden alfabetico ascendente</option>
             <option value="desc(z-a)">Por orden alfabetico descendente</option> {/*creo un select para ordenar las recetas por orden alfabetico */}
         </select>
        </div>
        <div>
        <select onChange={e=>handleSortScore(e)}>
            <option value="asc(men-may)">Puntuacion de menor a mayor</option>
            <option value="desc(may-men)">Puntuacion de mayor a menor</option>
        </select>
        </div>
        <div>
         <select onChange={e => handleFilterByDietTypes(e)}  >
                <option value="All">Todos los tipos de dieta</option>
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
                <option value="dairy free">Dairy Free</option>
         </select>

        </div>
        <div>
        <Paged recipesPerPage={recipesPerPage} 
        allRecipes={allRecipes.length}
        paged={paged}/>

        <SearchBar />
        </div>
         {
        currentRecipes?.map((el) => {
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
    


