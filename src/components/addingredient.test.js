import React from 'react';
import { shallow } from 'enzyme';

import {AddingIngredient } from './addingredient'

describe('<AddingIngredient />', () => {
    it('Renders without crashing', () => {
      shallow(<AddingIngredient />);
    });
});