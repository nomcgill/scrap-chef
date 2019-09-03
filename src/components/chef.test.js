import React from 'react';
import { shallow } from 'enzyme';

import {Chef} from './chef';

describe('<Chef />', () => {
  it('Renders without crashing', () => {
    shallow(<Chef />);
  });
});