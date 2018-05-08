import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CreateMeetupScreen extends Component 
{   static navigationOptions={title:'Create a new Meetup'}
     state = {}
    render() { return(
                    <View>
                    <Text>CreateMeetupScreen page</Text>
                    </View>
                );
            }
}

export default CreateMeetupScreen