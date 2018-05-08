import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import styles from './styles/CreateMeetupScreen';
import Colors from '../../../constants/Colors';
import DateTimePicker from 'react-native-modal-datetime-picker';

class CreateMeetupScreen extends Component 
{  // static navigationOptions={title:'Create a new Meetup'}
     state = { isDateTimePickerVisible: false}
     _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
     _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
     _handleDatePicked = date => {    this.setState({ date });    this._handleDateTimePicker();  }
    render() { return(
                    <View style={styles.root}>
                    <Text>CreateMeetupScreen page</Text>
                      <View style={styles.container}>
                          <View style={styles.item}>
                              <FormLabel fontFamily="montserrat" >Title</FormLabel>
                              <FormInput selectionColor={Colors.$redColor}/>
                          </View>
                          <View style={styles.item} >
                              <FormLabel fontFamily="montserrat">Description</FormLabel>
                              <FormInput multiline selectionColor={Colors.$redColor}/>
                          </View>
                          <View style={styles.item}>
                              <Button onPress={this._showDateTimePicker} 
                                      title="Pick a meetup date" raised fontFamily="montserrat"/>
                          </View>
                          <View style={styles.buttonCreate}>
                                <Button  backgroundColor={Colors.$blackBlueColor} 
                                         title="Create Meetup"
                                         raised fontFamily="montserrat"
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