import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Burger/Controls/Controls';

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.20,
    meat: 0.90,
    bacon: 0.60,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPricing: 0
    };

    addIngredient = (type) => {
        let updatedTotalPrice = 0;
        let updatedCount = this.state.ingredients[type] + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        updatedTotalPrice = this.state.totalPricing + INGREDIENT_PRICES[type];
        updatedTotalPrice = Math.floor(updatedTotalPrice * 100) / 100
        this.setState({ ingredients: updatedIngredients, totalPricing: updatedTotalPrice })
    }

    removeIngredient = (type) => {
        let updatedTotalPrice, updatedCount = 0;
        let oldCount = this.state.ingredients[type]
        if (oldCount > 0) {
            updatedCount = oldCount - 1;
        }
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        if (oldCount > 0) {
            updatedTotalPrice = this.state.totalPricing - INGREDIENT_PRICES[type];
            updatedTotalPrice = Math.floor(updatedTotalPrice * 100) / 100;
            updatedTotalPrice = updatedTotalPrice < 0 ? 0 : updatedTotalPrice;
        }
        this.setState({ ingredients: updatedIngredients, totalPricing: updatedTotalPrice })
    }


    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <Controls
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    price={this.state.totalPricing}
                />
            </div>
        );
    }
}

export default BurgerBuilder;