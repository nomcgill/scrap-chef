import React from 'react'
import {connect} from 'react-redux';
import {
  NavLink,
} from 'react-router-dom'

import { fetchMenu } from '../actions'
import { atlasLogIn } from '../actions'
import LoggedIn from './loggedin';
import LoggedOut from './loggedout';

// ProfilePage manages the username portion of the app. 
// It will display differently, depending on a logged-in or logged-out status.
export class ProfilePage extends React.Component {

    onLogInSubmit(event) {
        event.preventDefault();
        let grab = document.getElementById("username-field").value
        let run = this.props
        let text = grab.trim()
        let ingreds = this.props.ingredients
    
        let first = new Promise(function(resolve){
            run.dispatch(atlasLogIn(text))
            resolve()
        });
        first.then(function(){
            run.dispatch(fetchMenu(ingreds))
            grab = ''
        })
    }    
  
    render() {
        return (
            <div className="profile-page">
                <NavLink to="/kitchen" id="close-profile">x</NavLink>{' '}
                <form onSubmit={(e) => this.onLogInSubmit(e)}>
                    <LoggedIn />
                    <LoggedOut />
                </form>
            </div>
        )}
}
  
const mapStateToProps = state => ({
    username: state.username,
    ingredients: state.ingredients
  });

export default connect(mapStateToProps)(ProfilePage);