import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import styles from './styles/CreateMeetupScreen';
import Colors from '../../../constants/Colors';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
//import {MeetupApi} from '../../../constants/api';
import { CreateMeetupForm } from './components';
import { connect } from 'react-redux';
import { createMeetup } from './actions';
import { LoadingScreen } from '../../commons';


//const meetupApi=new MeetupApi();


@connect(  state => ({    meetup: state.createMeetup,  }),  { createMeetup })
export default class CreateMeetupScreen extends Component
{  // static navigationOptions={title:'Create a new Meetup'}
     state = { isDateTimePickerVisible: false ,  date: moment(), 
       // title: '', description: '' //---not required--will come from redux
    }
     _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
     _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
     _handleDatePicked = date => {    this.setState({ date });    this._handleDateTimePicker();  }
     _checkTitle() {  const { date } = this.state;
                      if (date > moment()) {      return moment(date).format('MMMM Do YYYY, h:mm:ss a');    }
                      return 'Pick a meetup date';
                   }
    _checkIfButtonSubmitDisabled() {   // const { title, description, date } = this.state;
                                       //  if (title.length > 5 && description.length > 10 && date > moment()) 
                                       //  {  return false;    }
                                       //  return true;
                                      //   const { date } = this.state;
                                        if (date > moment()) {      return false;    }
                                         return true;
                                     }
    //_changeTitle=title=>this.setState({title})
   // _changeDescription = description=>this.setState({description})
    //_createMeetup = async () => { //const { title, description, date } = this.state;
                                //  const res=await meetupApi.createGroupMeetups({ title,  description, date});
                                 // console.log('/src/screens/createmeetup/createmeetupscreenjs-_createMeetup-res=',res)
   _createMeetup = async values => {   await this.props.createMeetup(values);
                                       this.props.navigation.goBack();
                                   }

    render() {  const {  meetup, } = this.props;
                if (meetup.isLoading) {   return (  <View style={styles.root}>          
                                                    <LoadingScreen />
                                                     </View>
                                                     );
                                    } else if (meetup.error.on) {   return (   <View style={styles.root}>
                                                                                  <Text>{meetup.error.message}</Text>
                                                                               </View>
                                                                            );
                                                               }
    return (
        <View style={styles.root}>
          <CreateMeetupForm
            createMeetup={this._createMeetup}
            showDateTimePicker={this._showDateTimePicker}
            checkTitle={this._checkTitle()}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._handleDateTimePicker}
            mode="datetime"
          />
        </View>
      );
    }
  }
  
  //export default CreateMeetupScreen