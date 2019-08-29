import React from 'react';

export default function Pantry(props) {

  const ingredients = props.ingredients.map((ingredient, index) => (
    <li 
      key={index} 
      className="ingredients"
      onMouseOver={() => {
        document.getElementById(`x-${ingredient}`).classList.remove("invisible")
      }}
      onMouseOut={() => {
        document.getElementById(`x-${ingredient}`).classList.add("invisible")
      }}>
      {ingredient}
      <span className={"remove-ingredient invisible"} id={`x-${ingredient}`} onClick={() => {
        props.remove(ingredient)
      }}>x</span>
    </li>
  ))

  return (
    <div className="my-kitchen menu">
        <ul>
          {ingredients}
        </ul>
    </div>
  );
}
