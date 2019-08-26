import React from 'react';
import { shallow } from 'enzyme';

import Kitchen from './kitchen';

describe('<Kitchen />', () => {
    it('Renders without crashing', () => {
      shallow(<Kitchen />);
    });
});