import React from 'react';

import {Header} from './index';
import expectShallow from '../../utils/testing/expectComponent';

describe('components/Header', () => {
    it('renders as expected', () => {
        expectShallow(<Header />).toMatchSnapshot();
    });
});
