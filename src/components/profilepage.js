import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import LoggedIn from './loggedin';
import LoggedOut from './loggedout';
import Pantry from './pantry';
import AddingIngredient from './addingredient';
import Menu from './menu';
import Missing from './missing';


export default class ProfilePage extends React.Component {
  
    render() {   
        if (window.innerWidth <= 800){
        return (
            <div className="profile-page">
                <NavLink to="/kitchen" id="close-profile">x</NavLink>{' '}
                <LoggedIn 
                    username={this.props.username}/>
                <LoggedOut
                    username={this.props.username}/>

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
                        <div className="recipe-info-left">
                            <p><u>Your kitchen still needs</u> :</p>
                            <p className ="missing-ingredients"> </p>
                        </div>
                        <button type="button" name="Recipe">Get Recipe</button>
                    </div>
                </div>
                <div id="overlay-back"></div>
                <div className="profile-page">
                    <NavLink to="/kitchen" id="close-profile">x</NavLink>{' '}
                    <LoggedIn 
                        username={this.props.username}/>
                    <LoggedOut 
                        username={this.props.username}/>
                </div>
            </main>
        );
    }}
}