import React from 'react';
import { shallow } from 'enzyme';

import Recipe from './recipe';

describe('<Recipe />', () => {
    it('Renders without crashing', () => {
      shallow(<Recipe />);
    });
});