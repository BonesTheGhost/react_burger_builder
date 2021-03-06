//The burger were rendering to the screen.
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            }); // [,]w
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    //^Reduce is a built in array function that allows us to transform an array into something else. Takes 2 arguments.
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding Ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;