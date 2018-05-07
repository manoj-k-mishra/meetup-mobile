import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { HomeReducer,} from '../screens';

export default combineReducers({ 
    // fake: () => ['hello']
    home: HomeReducer,
    });   //fake function reutrn an array