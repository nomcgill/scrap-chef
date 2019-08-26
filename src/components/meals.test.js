import React from 'react';
import { shallow } from 'enzyme';

import Meals from './meals';

describe('<Meals />', () => {
    it('Renders without crashing', () => {
      shallow(<Meals />);
    });
});