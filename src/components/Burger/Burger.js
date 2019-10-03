import React from 'react';
import '../Burger/Burger.css';
import Ingredients from './Ingredients/Ingredients'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(
            igKey => {
                return [...Array(props.ingredients[igKey])].map(
                    (_, i) => <Ingredients key={igKey + i} type={igKey} />
                )
            }
        )
        .reduce(
            (previousValue, currentValue) =>{
                return previousValue.concat(currentValue);
            }, []
        );

        if(transformedIngredients.length == 0){
            transformedIngredients = <p>Please start adding ingredients</p>
        }
    return (
        <div className='Burger'>
            <Ingredients type="bread-top" />
            {transformedIngredients}
            <Ingredients type="bread-bottom" />
        </div>
    );
};

export default burger;