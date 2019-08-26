import React from 'react';
import { shallow } from 'enzyme';

import Pantry from './pantry';

describe('<Pantry />', () => {
    it('Renders without crashing', () => {
      shallow(<Pantry />);
    });
});