import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { HomeReducer,  CreateMeetupReducer,  UserReducer,
     } from '../screens';
import navigation from '../routes/navigationReducer';
export default combineReducers({ 
    // fake: () => ['hello']
    home: HomeReducer, 
    createMeetup: CreateMeetupReducer, //each of this folder has this reducer now
    navigation,
    user: UserReducer,
    form,
    });   //fake function reutrn an array