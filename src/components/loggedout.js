import React from 'react';
import {connect} from 'react-redux';


export function LoggedOut(props) {
    const username = props.username
    if (!username){
        return (
            <div className="logged-out">
                <h2>Who's the chef?</h2>
                <input className="username-input" type="text" maxLength="16" name="username" placeholder="Username" />
                <div className="log-in-options">
                    <button className="log-in" type="submit">Log In</button>
                    <p> or </p>
                    <button className="log-out" type="button">Create Profile</button>
                </div>
            </div>
        );
    }
    else {
        return (<div className="hidden"></div>)
    }
}

const mapStateToProps = state => ({
    username: state.username
  });
  
  export default connect(mapStateToProps)(LoggedOut);