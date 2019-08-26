import React from 'react';
import { shallow } from 'enzyme';

import ProfilePage from './profilepage';

describe('<ProfilePage />', () => {
    it('Renders without crashing', () => {
      shallow(<ProfilePage />);
    });
});