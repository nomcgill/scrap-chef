import React from 'react';
import {connect} from 'react-redux';

// Menu simply formats and returns the menu of options that have been returned from the ingredients API fetch.
export class Menu extends React.Component {

  render(){
      const options = this.props.options.map((option, index) => (
      <label key={index}>
        <li className="meals" >
          <input type="radio" name="meals" value={index} required />
          <div className="example-picture" style={{
            content: `url(${option.thumbnail})`
          }}></div>
          <span>{option.title}</span>
        </li>
      </label>
    ))
    
    return (
      <ul>
        {options}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  options: state.options,
  ingredients: state.ingredients
});

export default connect(mapStateToProps)(Menu);
