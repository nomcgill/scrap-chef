import React from 'react';
// import {connect} from 'react-redux';

import Menu from './menu';
import Missing from './missing';

export default class Meals extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            ingredients: '',
        };
    }
 
  
    render() {   
        return (
            <div className="meal-side">
                <div className="my-meals menu">
                    <Menu />
                </div>
                <div className="recipe-info">
                    <Missing />
                    <button type="button" name="Recipe" href="">Get Recipe</button>
                </div>
            </div>
        );
    }

}
