import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import styles from './styles/CreateMeetupScreen';
import Colors from '../../../constants/Colors';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

class CreateMeetupScreen extends Component 
{  // static navigationOptions={title:'Create a new Meetup'}
     state = { isDateTimePickerVisible: false ,  date: moment(), title: '', description: ''}
     _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
     _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
     _handleDatePicked = date => {    this.setState({ date });    this._handleDateTimePicker();  }
     _checkTitle() {  const { date } = this.state;
                      if (date > moment()) {      return moment(date).format('MMMM Do YYYY, h:mm:ss a');    }
                      return 'Pick a meetup date';
                   }
    _checkIfButtonSubmitDisabled() {    const { title, description, date } = this.state;
                                         if (title.length > 5 && description.length > 5 && date > moment()) 
                                         {  return false;    }
                                         return true;
                                     }
    _changeTitle=title=>this.setState({title})
    _changeDescription=description=>this.setState({description})
    render() { console.log('/src/screens/createmeetup/createmeetupscreenjs-this.state=.',this.state);
               
             return(
                    <View style={styles.root}>
                    <Text>CreateMeetupScreen page</Text>
                      <View style={styles.container}>
                          <View style={styles.item}>
                              <FormLabel fontFamily="montserrat" >Title</FormLabel>
                              <FormInput onChangeText={this._changeTitle}
                                         value={this.state.title} 
                                         selectionColor={Colors.$redColor}
                               />
                          </View>
                          <View style={styles.item} >
                              <FormLabel fontFamily="montserrat">Description</FormLabel>
                              <FormInput onChangeText={this._changeDescription}
                                         value={this.state.description}
                                       multiline selectionColor={Colors.$redColor}
                              />
                          </View>
                          <View style={styles.item}>
                              <Button onPress={this._showDateTimePicker} 
                                      title={this._checkTitle()} raised fontFamily="montserrat"/>
                          </View>
                          <View style={styles.buttonCreate}>
                                <Button  backgroundColor={Colors.$blackBlueColor} 
                                         title="Create Meetup"
                                         raised 
                                         fontFamily="montserrat"
                                         disabled={this._checkIfButtonSubmitDisabled()}
                                />
                           </View>
                      </View>
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

export default CreateMeetupScreen