import React from 'react';

// import NumberInput from './number-input';
// import Output from './output';

export default class Chef extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            username: '',
            kitchen: ''
        };
    }

    
 
  
    render() {
        console.log("CHEF rendered!")
        return (
            <h1>SCRAP CHEF</h1>
        );
    }
}