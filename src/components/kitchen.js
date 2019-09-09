import React from 'react';
import {connect} from 'react-redux';
import { findRecipe } from '../actions'

import Pantry from './pantry';
import AddingIngredient from './addingredient';
import Menu from './menu';

// Kitchen houses the user storage of ingredients. 
// User can add to the list with the AddingIngredient component, or remove with the X div listed in pantry.
// In CSS, when the window width <= 800, the Kitchen will list alone 
// and occupy whole screen by hiding the Meals component content.
export class Kitchen extends React.Component {

    onRecipeSubmit(event) {
        event.preventDefault();
        var recipes = this.props.recipes
        this.props.dispatch(findRecipe(recipes))
    }

    render() {
        return (
            <main>
                <div className="kitchen-side">
                    <Pantry />
                    <AddingIngredient />
                </div>
                <div className="meal-side">
                    <form name="choose-recipe" onSubmit={(e) => this.onRecipeSubmit(e)}>
                    <div className="my-meals menu">
                    <Menu />
                    </div>
                    <div className="recipe-info">
                        <button type="submit" name="Recipe" href="">Get Recipe</button>
                    </div>
                    </form>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes,
    ingredients: state.ingredients,
    options: state.options
})

export default connect(mapStateToProps)(Kitchen);