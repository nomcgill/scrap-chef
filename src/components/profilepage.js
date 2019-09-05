import React from 'react'
import {connect} from 'react-redux';
// import ReactDOM from 'react-dom'
import {
//   Route,
  NavLink,
//   BrowserRouter as Router,
//   Switch,
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
            console.log("first")
            resolve()
        });
        first.then(function(){
            console.log("second")
            console.log(ingreds)
            run.dispatch(fetchMenu(ingreds))
            grab = ''
        })
    }    
  
    render() {
        if (window.innerWidth <= 800){
        return (
            <div className="profile-page">
                <NavLink to="/kitchen" id="close-profile">x</NavLink>{' '}
                <form onSubmit={(e) => this.onLogInSubmit(e)}>
                    <LoggedIn />
                    <LoggedOut />
                </form>
            </div>
        )}
        else {
        return (
            <main>
                <div className="kitchen-side">
                    <div className="my-kitchen menu">
                        <ul>
                            <li className="ingredients"> </li>
                            <li className="ingredients"> </li>
                            <li className="ingredients"> </li>
                            <li className="ingredients"> </li>
                            <li className="ingredients"> </li>
                            <li className="ingredients"> </li>
                            <li className="ingredients"> </li>
                        </ul>
                    </div>
                    <form name="add-ingredient">
                        <input type="text" className="ingredient-input" maxLength="25" name="ingredient" placeholder="What else is in your kitchen...?" />
                        <button type="button" name="Add">Add</button>
                    </form>
                </div>
                <div className="meal-side">
                    <div className="my-meals menu">
                        <ul>
                        </ul>
                    </div>
                    <div className="recipe-info">
                        <div className="recipe-info-left"></div>
                        <button type="button" name="Recipe">Get Recipe</button>
                    </div>
                </div>
                <div id="overlay-back"></div>
                <div className="profile-page">
                    <NavLink to="/kitchen" id="close-profile">x</NavLink>{' '}
                    <form onSubmit={(e) => this.onLogInSubmit(e)}>
                        <LoggedIn />
                        <LoggedOut />
                    </form>
                </div>
            </main>
        );
    }}
}
  
const mapStateToProps = state => ({
    username: state.username,
    ingredients: state.ingredients
  });

export default connect(mapStateToProps)(ProfilePage);