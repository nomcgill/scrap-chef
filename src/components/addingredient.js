import React from 'react';

export default class AddIngredient extends React.Component {
  onSubmit(event) {
      event.preventDefault();
  
    //   if (this.props.onMakeGuess) {
    //     const value = this.input.value;
    //     this.props.onMakeGuess(value);
    //   }
      this.input.value = '';
      this.input.focus();
  }

  render() {
    return (
      <form name="add-ingredient" onSubmit={e => this.onSubmit(e)}>
        <input 
            type="text" 
            className="ingredient-input" 
            maxLength="25" 
            name="ingredient" 
            placeholder="What else is in your kitchen...?"
            autoComplete="off"
            required
        />
        <button 
            type="button" 
            name="Add"
        >
            Add
        </button>
      </form>
    );
  }
}