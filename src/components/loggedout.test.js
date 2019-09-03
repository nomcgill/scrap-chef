import React from 'react';
import { shallow } from 'enzyme';

import {LoggedOut} from './loggedout';

describe('<LoggedOut />', () => {
    it('Renders without crashing', () => {
      shallow(<LoggedOut />);
    });
});