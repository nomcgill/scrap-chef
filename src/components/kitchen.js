import React from 'react';
// import {connect} from 'react-redux';

import Pantry from './pantry';
import AddingIngredient from './addingredient';
import Menu from './menu';
import Missing from './missing';


export default class Kitchen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            theMissing: ["eggs", "milk", "bread", "brown sugar", "cantelope"],
            profile: false
        };
        this.handleRemove = this.handleRemove.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleRemove(item){
        console.log(item)
        var array = [...this.state.ingredients]
        var index = this.state.ingredients.indexOf(item)
        array.splice(index, 1);
        this.setState({ingredients: array});
    }

    handleAdd(item){
        console.log(item)
        var array = [...this.state.ingredients]
        array.push(item);
        this.setState({ingredients: array})
    }
  
    render() {
        return (
            <main>
                <div className="kitchen-side">
                    <Pantry 
                        ingredients={this.props.ingredients} 
                        remove={this.handleRemove}
                    />
                    <AddingIngredient 
                        ingredients={this.props.ingredients} 
                        add={this.handleAdd}
                    />
                </div>
                <div className="meal-side">
                    <form name="choose-recipe">
                    <div className="my-meals menu">
                    <Menu
                        ingredients={this.props.ingredients}
                        options={this.props.options}/>
                    </div>
                    <div className="recipe-info">
                        <Missing 
                        theMissing={this.state.theMissing}/>
                        <button type="button" name="Recipe" href="">Get Recipe</button>
                    </div>
                    </form>
                </div>
            </main>
        );
    }

}
