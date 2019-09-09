import React from 'react';
import {connect} from 'react-redux';

import { atlasCreate } from '../actions'

// This profile page displays while the user is NOT logged in with a username.
// They can either log in, checking and fetching from the MongoDB Atlast database, or POST a new username with atlasCreate().
export function LoggedOut(props) {
    const username = props.username
    if (!username){
        return (
            <div className="logged-out">
                <h2>Who's the chef?</h2>
                <input className="username-input" id="username-field" type="text" maxLength="16" name="username" placeholder="Username" />
                <div className="log-in-options">
                    <button 
                        className="log-in" 
                        type="submit"
                        >Log In
                    </button>
                    <p> or </p>
                    <button 
                        className="create-profile" 
                        type="button" 
                        onClick={() => props.dispatch(atlasCreate(document.getElementById(`username-field`).value, props.ingredients))}
                        >Create Profile
                        </button>
                </div>
            </div>
        );
    }
    else {
        return (<div className="hidden"></div>)
    }
}

const mapStateToProps = state => ({
    username: state.username,
    ingredients: state.ingredients
  });
  
  export default connect(mapStateToProps)(LoggedOut);