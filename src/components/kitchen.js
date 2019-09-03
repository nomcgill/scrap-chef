import React from 'react';
import {connect} from 'react-redux';
import { fetchMenu } from '../actions'

import Pantry from './pantry';
import AddingIngredient from './addingredient';
import Menu from './menu';
// import {resize} from '../actions'

export class Kitchen extends React.Component {

    onRecipeSubmit(event) {
        event.preventDefault();
        var choice = document.querySelector('input[name="meals"]:checked').value
        var recipeUrl = this.props.recipes[choice]
        if (choice){
            window.open(recipeUrl)
        }
        else{
            console.log("problem in submit")
        }
    }

    componentDidMount() {
        var stuff = this.props.ingredients
        this.props.dispatch(fetchMenu(stuff))
    }

    render() {
        console.log("KITCHEN rendered")
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