import React from 'react';
// import {connect} from 'react-redux';

import Menu from './menu';
import Missing from './missing';
import Kitchen from './kitchen'

export default class Meals extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            theMissing: ["eggs", "milk", "bread", "brown sugar", "cantelope"],
            selected: ''
        };
    }

    onRecipeSubmit(event) {
        event.preventDefault();
        console.log("submitted")
        const choice = document.querySelector('input[name="meals"]:checked').value;
        this.setState({
            selected: choice
        });
    }

    render() {
        if (window.innerWidth <= 800){
        return (
            <main>
                <div className="meal-side">
                <form name="choose-recipe" onSubmit={(e) => this.onRecipeSubmit(e)}>
                    <div className="my-meals menu">
                        <Menu
                        ingredients={this.props.ingredients}
                        options={this.props.options}
                        />
                    </div>
                    <div className="recipe-info">
                        <Missing 
                            theMissing={this.state.theMissing}/>
                        <button type="submit" name="Recipe" >Get Recipe</button>
                    </div>
                    </form>
                </div>
            </main>
        )}
        else {
        return (
            <Kitchen
                theMissing={this.state.theMissing}
                ingredients={this.props.ingredients}
                options={this.props.options}
             />
        )}
    } 

}
