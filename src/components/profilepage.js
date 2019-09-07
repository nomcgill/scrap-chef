import React from 'react'
import {connect} from 'react-redux';
import {
  NavLink,
} from 'react-router-dom'

import { fetchMenu } from '../actions'
import { atlasLogIn } from '../actions'
import LoggedIn from './loggedin';
import LoggedOut from './loggedout';

export class ProfilePage extends React.Component {

    onLogInSubmit(event) {
        event.preventDefault();
        var grab = document.getElementById("username-field").value
        var run = this.props
        var text = grab.trim()
        var ingreds = this.props.ingredients
    
        var first = new Promise(function(resolve){
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