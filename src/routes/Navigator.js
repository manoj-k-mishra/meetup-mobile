import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import {  CreateMeetupScreen,} from '../screens';
import Colors from '../../constants/Colors';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import React from 'react';

const CloseButton = styled(Touchable)`  marginLeft: 10;`;

export default StackNavigator(
{ Home: { screen: HomeNavigator },
  CreateMeetup: 
  { screen: CreateMeetupScreen,
    navigationOptions: ({ navigation }) => (
    { title: 'Create a new Meetup',
      headerStyle: { backgroundColor: Colors.$redColor, },
      headerTitleStyle: {  color: Colors.$whiteColor,  },
      headerLeft: (
        <CloseButton feedback="opacity" onPress={() => navigation.goBack()}>
          <MaterialIcons  name="close"  color="#fff"  size={30}  />
        </CloseButton>
      ),
    }),
  },
},
{
    mode: 'modal',
});