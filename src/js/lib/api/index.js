/* eslint-disable no-param-reassign */
import { jsVars } from 'lib/common/util';
import baseApi from 'lib/api/baseApi';

import NewsTicker from './NewsTicker';

const main = {
    ...baseApi,

    ...NewsTicker,
};

export default main;