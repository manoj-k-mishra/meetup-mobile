import { TabNavigator } from 'react-navigation';
import React from 'react';
import {    HomeScreen, NotificationsScreen, ProfileScreen

       } from '../screens';

  export default TabNavigator(
      {    Home: {  screen: HomeScreen, },
           Notifications: {  screen: NotificationsScreen,},
           ProfileScreen: {  screen: ProfileScreen,}
    });
  