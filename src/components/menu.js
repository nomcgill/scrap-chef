import React from 'react';

export default function Menu(props) {
//   const guesses = props.guesses.map((guess, index) => (
//     <li key={index}>
//       {guess}
//     </li>
//   ));

  return (
    <ul>
        <li className="meals">
            <div className="example-picture"></div>
            <p>Pork Dumplings</p>
        </li>
        <li className="meals">
            <div className="example-picture"></div>
            <p>Mexican Pizza</p>
        </li>
        <li className="meals">
            <div className="example-picture"></div>
            <p>Bruschetta Chicken Pasta Bowl from Olive Garden</p>
        </li>
        <li className="meals"><div className="example-picture"></div><p>Quinoa</p></li>
    </ul>
  );
}
