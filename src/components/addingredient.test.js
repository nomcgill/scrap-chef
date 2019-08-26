import React from 'react';
import { shallow } from 'enzyme';

import AddIngredient from './addingredient';

describe('<AddIngredient />', () => {
    it('Renders without crashing', () => {
      shallow(<AddIngredient />);
    });
});