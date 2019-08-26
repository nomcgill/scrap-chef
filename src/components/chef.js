import React from 'react';

import Tooltip from './tooltip';
import Nav from './nav';
import Kitchen from './kitchen';
import Meals from './meals';
import ProfilePage from './profilepage'

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
            <div>
                <div role="banner" className="banner">
                    <img src="https://nolanmcgill.files.wordpress.com/2019/08/chefshat.png" alt="Chef's Hat Logo"></img>
                    <h1>SCRAP CHEF</h1>
                    <Tooltip />
                </div>
                <div>
                    <Nav />
                </div>
                <main>
                    <Kitchen />
                    <Meals />
                    <div id="overlay-back"></div>
                    <ProfilePage />
                </main>
            </div>
        );
    }
}