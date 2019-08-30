import React from 'react';

export default function Menu(props) {

  const options = props.options.map((option, index) => (
    <label key={index}>
      <li className="meals" >
        <input type="radio" name="meals" value={option} required />
        <div className="example-picture"></div>
        <span>{option}</span>
      </li>
    </label>
  ))
  

  return (
    <ul>
      {options}
    </ul>
  );
}