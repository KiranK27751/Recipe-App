import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () =>{
  
  const APP_ID = 'c8651a33';
  const APP_KEY = '7d1992fe59631eee74a4e4c2875a7aa9';
  
  const [recipes, setrecipies] = useState([]);
  const [search, setsearch] = useState('');
  const [query, setquery] = useState('chicken');

  useEffect(()=>
  {
    getrecipe();
  }, [query]);

  const getrecipe = async()=>
  {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setrecipies(data.hits);

  }

  const updatesearch = e =>{
    setsearch(e.target.value);
  }

  const getsearch = e =>
  {
    e.preventDefault();
    setquery(search);
  }
  return(
<div className = "recipe-app">
    
    <form className = "search-form" onSubmit = {getsearch}>
      <input type= "text" className = "search-bar" value = {search} onChange = {updatesearch}/>
      <button type = "submit" className = "search-button" >Search</button>
   </form>
   <div className = "contents">
    {recipes.map(recipe =>(
      <Recipe
      key = {recipe.recipe.label} 
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories}
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}
      />
    ))  }
  </div>
</div>
  );
}

export default App;
