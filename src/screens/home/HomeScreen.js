import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles/HomeScreen';


class HomeScreen extends Component {
 
  render() {
    return (
      <View style={styles.root}>

          <Text>HomeScreen</Text>

      </View>
    );
  }
}

export default HomeScreen;