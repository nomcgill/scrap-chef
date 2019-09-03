import React from 'react';
import {connect} from 'react-redux';

export function Menu(props) {

  const options = props.options.map((option, index) => (
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

const mapStateToProps = state => ({
  options: state.options,
  ingredients: state.ingredients
});

export default connect(mapStateToProps)(Menu);
