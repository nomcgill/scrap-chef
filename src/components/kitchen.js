import React from 'react';
import {connect} from 'react-redux';
import { fetchMenu } from '../actions'
import { findRecipe } from '../actions'

import Pantry from './pantry';
import AddingIngredient from './addingredient';
import Menu from './menu';

export class Kitchen extends React.Component {

    onRecipeSubmit(event) {
        event.preventDefault();
        var recipes = this.props.recipes
        this.props.dispatch(findRecipe(recipes))
    }

    componentDidMount() {
        var stuff = this.props.ingredients
        this.props.dispatch(fetchMenu(stuff))
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