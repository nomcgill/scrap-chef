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
        };
    }

    render() {
        if (window.innerWidth <= 800){
        return (
            <main>
                <div className="meal-side">
                <form name="choose-recipe" onSubmit={this.props.onRecSubmit}>
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
                remove={this.props.remove}
                add={this.props.add}
                onRecSubmit={this.props.onRecSubmit}
             />
        )}
    } 

}
