import React from 'react';
// import {connect} from 'react-redux';

import Pantry from './pantry';
import AddIngredient from './addingredient';

export default class Kitchen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            ingredients: '',
        };
    }

    
 
  
    render() {   
        return (
            <div className="kitchen-side">
                <Pantry />
                <AddIngredient />
            </div>
        );
    }

}
