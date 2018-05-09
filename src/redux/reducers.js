import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { HomeReducer,  CreateMeetupReducer,} from '../screens';

export default combineReducers({ 
    // fake: () => ['hello']
    home: HomeReducer, 
    createMeetup: CreateMeetupReducer, //each of this folder has this reducer now
    form,
    });   //fake function reutrn an array