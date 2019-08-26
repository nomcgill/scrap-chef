import React from 'react';
import { shallow } from 'enzyme';

import Missing from './missing';

describe('<Missing />', () => {
    it('Renders without crashing', () => {
      shallow(<Missing />);
    });
});