import React from 'react';
import { connect } from 'react-redux';

import { addTo } from '../actions';

export class AddingIngredient extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    let text = this.textInput.value.trim()
    let run = this.props
    let blank = this.textInput
    if (this.props.ingredients.indexOf(text) === -1 ){
        run.dispatch(addTo(text,run.ingredients))
        blank.value = ''
    }
    else {
      document.getElementById('ingredient-input').value = 'No DUPLICATES in this kitchen!'
      setTimeout(function(){ 
        document.getElementById('ingredient-input').value = '' }, 1500)
    }
  }

  render (){
    return (
      <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
        <input 
              type="text" 
              className="ingredient-input" 
              id="ingredient-input"
              maxLength="25" 
              name="ingredient" 
              placeholder="What else is in your kitchen?"
              autoComplete="off"
              ref={input => this.textInput = input}
              required
          />
          <button 
              type="submit" 
              name="Add"
          >
              Add
          </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  options: state.options,
  ingredients: state.ingredients
});

export default connect (mapStateToProps)(AddingIngredient);
