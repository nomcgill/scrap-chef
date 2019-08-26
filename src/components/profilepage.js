import React from 'react';

import LoggedIn from './loggedin';
import LoggedOut from './loggedout';

export default class Chef extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            username: '',
        };
    }
  
    render() {   
        return (
            <div className="profile-page">
                <div id="close-profile">x</div>
                <LoggedIn />
                <LoggedOut />
            </div>
        );
    }
}