import React from 'react';
import {connect} from 'react-redux';
import { fetchMenu } from '../actions'
import { findRecipe } from '../actions'

import Menu from './menu';
import Kitchen from './kitchen';

// Meals houses the Returned information of recipes based on the kitchen's "ingredients" state.
// Meals also specifies how to display information based on size. Window width <= 800px displays only this component.
export class Meals extends React.Component {

    onRecipeSubmit(event) {
        event.preventDefault();
        var options = this.props.options
        this.props.dispatch(findRecipe(options))
    }

    componentDidUpdate() {
        var stuff = this.props.ingredients
        this.props.dispatch(fetchMenu(stuff))
    }

    render() {
        if (window.innerWidth <= 800){
            return (
            <main>
                <div className="meal-side">
                <form name="choose-recipe" onSubmit={(e) => this.onRecipeSubmit(e)}>
                    <div className="my-meals menu">
                        <Menu />
                    </div>
                    <div className="recipe-info">
                        <button type="submit" name="Recipe" >Get Recipe</button>
                    </div>
                    </form>
                </div>
            </main>
        )}
        // Window is greater than 800? Display both Kitchen and Meals at once, as defaulted in the Kitchen component.
        else {
            return (
            <Kitchen />
        )}
    } 

}

const mapStateToProps = state => ({
    recipes: state.recipes,
    ingredients: state.ingredients,
    options: state.options
})

export default connect(mapStateToProps)(Meals);
