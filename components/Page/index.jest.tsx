import React from 'react';

import {Page} from './index';
import expectShallow from '../../utils/testing/expectComponent';

describe('components/Page', () => {
    it('renders as expected', () => {
        expectShallow(<Page><h1>Hello Next!</h1></Page>).toMatchSnapshot();
    });
});
