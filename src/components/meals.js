import React from 'react';
import {connect} from 'react-redux';
import { fetchMenu } from '../actions'


import Menu from './menu';
import Kitchen from './kitchen';


export class Meals extends React.Component {

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

    //   componentDidUpdate(prevProps) {
    //     if (prevProps.params.id !== this.props.params.id) {
    //       this.fetchTrans();
    //     }
    //   }

    render() {
        console.log("MEALS rendered")
        
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
