import React from 'react';

export default class AddingIngredient extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.add) {
        this.props.add(text);
    }
    this.textInput.value = ''
  }

  render (){
    return (
      <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
        <input 
              type="text" 
              className="ingredient-input" 
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
