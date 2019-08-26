import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from './tooltip';

describe('<Tooltip />', () => {
    it('Renders without crashing', () => {
      shallow(<Tooltip />);
    });
});