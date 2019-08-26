import React from 'react';

export default function Pantry(props) {
//   const guesses = props.guesses.map((guess, index) => (
//     <li key={index}>
//       {guess}
//     </li>
//   ));

  return (
    <div className="my-kitchen menu">
        <ul>
            <li className="ingredients">Eggs<span className="remove-ingredient">x</span></li>
            <li className="ingredients">Bread</li>
            <li className="ingredients">Milk</li>
            <li className="ingredients">Brown Sugar</li>
            <li className="ingredients">Sausage Pepperoni Pizza with Cucumbers</li>
            <li className="ingredients">Brown Sugar</li>
            <li className="ingredients">Brown Sugar</li>
        </ul>
    </div>
  );
}
