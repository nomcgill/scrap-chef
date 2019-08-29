import React from 'react';

export default function LoggedIn(props) {
    const username = props.username
    if (username){
        return (
            <div className="logged-in">
                <p>Logged in as:</p>
                <p className="chef">Chef <span className="current-username bold">{username}</span></p>
                <button type="button" name="Log Out">Log Out</button>
            </div>
        );
    }
    else {
        return (<div className="hidden"></div>)
    }
}
