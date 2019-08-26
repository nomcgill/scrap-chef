import React from 'react';

export default function Missing(props) {
    return (
        <div className="recipe-info-left">
            <p><u>Your kitchen still needs</u> :</p>
            <p className="missing-ingredients">Nothing. Nothing. Nothing. No. Nothing. Nothing. Nothing. No. </p>
        </div>
    );
};

Missing.defaultProps = {
    text: 'None.'
};
