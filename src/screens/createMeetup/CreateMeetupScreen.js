import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import styles from './styles/CreateMeetupScreen';
import Colors from '../../../constants/Colors';

class CreateMeetupScreen extends Component 
{  // static navigationOptions={title:'Create a new Meetup'}
     state = {}
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
                              <Button title="Pick a meetup date" raised fontFamily="montserrat"/>
                          </View>
                          <View style={styles.buttonCreate}>
                                <Button backgroundColor={Colors.$blackBlueColor}
                                    title="Create Meetup" raised fontFamily="montserrat"
                                />
                           </View>
                             
                      </View>
                    </View>
                );
            }
}

export default CreateMeetupScreen