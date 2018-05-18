import React from 'react';

import {Meta} from './index';
import expectShallow from 'lib/utils/testing/expectComponent';

describe('components/Meta', () => {
    it('renders as expected', () => {
        expectShallow(<Meta />).toMatchSnapshot();
    });
});
