import React from 'react';
import { connect } from 'react-redux';

import { addToKitchen } from '../actions';
import { fetchMenu } from '../actions';


export class AddingIngredient extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    var text = this.textInput.value.trim()
    var run = this.props
    var blank = this.textInput
    var stuff = this.props.ingredients
    run.dispatch(addToKitchen(text))
    blank.value = ''

    // var first = new Promise(function(resolve){
    //   run.dispatch(addToKitchen(text))
    //   blank.value = ''
    //   resolve()
    // });
    // first.then(function(){

    //   console.log(stuff)
    //   run.dispatch(fetchMenu(stuff))
    // })
  }

//   componentDidUpdate(prevProps){
//     console.log(prevProps.value)
//     console.log(this.props.value)
//     if(prevProps.value !== this.props.value){ 
//       console.log("action")
//      }
//  }

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

const mapStateToProps = state => ({
  options: state.options,
  ingredients: state.ingredients
});

export default connect (mapStateToProps)(AddingIngredient);
