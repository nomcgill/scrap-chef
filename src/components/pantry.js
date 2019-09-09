import React from 'react';
import {connect} from 'react-redux';
import { removeFromKitchen } from '../actions';
import {fetchMenu} from '../actions';

// Pantry displays the current global state of the user's ingredients.
// This component will also update the Menu component by calling fetchMenu(), which fetches new results based on user input.
export class Pantry extends React.Component {

  getRemoving(ingredient){
      var run = this.props
      var stuff = this.props.ingredients
  
      var first = new Promise(function(resolve){
        run.dispatch(removeFromKitchen(ingredient))
        resolve()
      });
      first.then(function(){
        run.dispatch(fetchMenu(stuff))
      })

  }

  render() {
    const ingredients = this.props.ingredients.map((ingredient, index) => (
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
        <span className={"remove-ingredient invisible"}
         id={`x-${ingredient}`}
         onClick={() => {this.getRemoving(ingredient)}}
         >x
         </span>
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
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  options: state.options
});

export default connect(mapStateToProps)(Pantry);
