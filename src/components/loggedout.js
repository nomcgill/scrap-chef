import React from 'react';

export default class LoggedOut extends React.Component {
    // addCard(text) {
    //     this.props.dispatch(addCard(text, this.props.index));
    // }

    render() {
        // const cards = this.props.cards.map((card, index) =>
        //     <li key={index}>
        //         <Card {...card} />
        //     </li>
        // );
        return (
            <div className="logged-out">
                <h2>Who's the chef?</h2>
                <input className="username-input" type="text" maxLength="16" name="username" placeholder="Username" />
                <div className="log-in-options">
                    <button className="log-in">Log In</button>
                    <p> or </p>
                    <button className="log-out">Create Profile</button>
                </div>
            </div>
        );
    }
}