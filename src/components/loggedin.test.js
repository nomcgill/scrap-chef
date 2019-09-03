import React from 'react';
import { shallow } from 'enzyme';

import {LoggedIn} from './loggedin';

describe('<LoggedIn />', () => {
    it('Renders without crashing', () => {
      shallow(<LoggedIn />);
    });
});