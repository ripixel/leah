import React from 'react';

import {Header} from './index';
import expectShallow from 'lib/utils/testing/expectComponent';

describe('components/Header', () => {
    it('renders as expected', () => {
        expectShallow(<Header />).toMatchSnapshot();
    });
});
