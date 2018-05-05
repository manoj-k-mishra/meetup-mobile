import { TabNavigator } from 'react-navigation';
import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import {    HomeScreen, NotificationsScreen, ProfileScreen } from '../screens';

const AddButton = styled(Touchable)` marginRight: 10;`;

const NavbarDefaultStyle = { backgroundColor: Colors.redColor, };

  export default TabNavigator(
      {     Home: {  screen: HomeScreen,
                    navigationOptions: ({ navigation }) => (
                     {   headerStyle: NavbarDefaultStyle,
                         headerRight: ( <AddButton feedback="opacity" onPress={() => navigation.navigate('CreateMeetup')}>
                                     <MaterialIcons  name="add-circle"  size={30}  color="#fff" />
                                </AddButton>
                             ),
                        tabBarIcon: ({ tintColor }) => ( <FontAwesome  name="home" size={25} color={tintColor} />   ),
                     }),
                },
  //----------home screen done
         Notifications: 
         {   screen: NotificationsScreen,
             navigationOptions: { headerStyle: NavbarDefaultStyle,
                             tabBarIcon: ({ tintColor }) => ( <MaterialIcons name="notifications"  size={25} color={tintColor}   /> ),
                            },
        },
        ProfileScreen: 
          { screen: ProfileScreen,
              navigationOptions: { headerStyle: NavbarDefaultStyle,
                           tabBarIcon: ({ tintColor }) => ( <MaterialIcons name="account-circle" size={25} color={tintColor} />  ),
                         },
         },
    },

     {
        swipeEnabled: true,
     //   animationEnabled: false,
        tabBarPosition: 'bottom',
        tabBarOptions: 
        {
       //   showLabel: false,
          showIcon: true,
        //  inactiveTintColor: Colors.blackBlueColor,
         // activeTintColor: Colors.redColor,
       //   pressColor: Colors.redColor,
        //  indicatorStyle: { backgroundColor: Colors.whiteColor },
        //  style: {    backgroundColor: Colors.redColor, },
        },
     }
);

