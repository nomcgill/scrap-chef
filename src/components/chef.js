import React from 'react';

// import Tooltip from './tooltip';
// import Nav from './nav';
// import Kitchen from './kitchen';
// import Meals from './meals';

export default class Chef extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            username: '',
            kitchen: ''
        };
    }

    
 
  
    render() {   
        return (
            <div roleName="banner" className="banner">
                <img src="https://nolanmcgill.files.wordpress.com/2019/08/chefshat.png" alt="Chef's Hat Logo"></img>
                <h1>SCRAP CHEF</h1>
                <div id="tooltip">?</div>
            </div>
        );
    }
}