import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors1 from './constants/Colors';
import { HomeScreen } from './src/screens'

EStyleSheet.build(Colors1);


export default class App extends React.Component 
{    

render() { return <HomeScreen/> ; }
}
