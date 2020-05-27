import React from 'react';
import style from './recipe.module.css';
const recipie = ({title, calories, image, ingredients}) =>
{
    return(
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img src = {image} alt = ""></img>
            <ol>
                {
                    ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                    ))
                }
            </ol>
        </div>
    );
}

export default recipie;