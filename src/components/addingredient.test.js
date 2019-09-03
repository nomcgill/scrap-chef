import React from 'react';
import { shallow } from 'enzyme';

import {AddingIngredient } from './addingredient'
// import { ADD_TO_KITCHEN } from '../actions';
// import { fetchMenu } from '../actions';

describe('<AddingIngredient />', () => {
    it('Renders without crashing', () => {
      shallow(<AddingIngredient />);
    });
});