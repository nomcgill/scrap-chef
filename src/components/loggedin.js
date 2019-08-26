import React from 'react';

export default function LoggedIn(props) {

    return (
        <div className="logged-in">
            <p>Logged in as:</p>
            <p className="chef">Chef <span className="current-username bold">Francisca</span></p>
            <button type="button" name="Log Out">Log Out</button>
        </div>
    );
}
