import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors1 from './constants/Colors';
import { HomeScreen } from './src/screens'
//import { cachedFonts } from './helpers';
import { fontAssets } from './helpers';
import Expo, { AppLoading } from 'expo';

EStyleSheet.build(Colors1);


export default class App extends React.Component 
{    
  state = {    fontLoaded: false,}
  componentDidMount() {  this._loadAssetsAsync();}

 async _loadAssetsAsync() {
  await Promise.all(fontAssets);

  this.setState({ fontLoaded: true });
}

  render() 
  {  if (!this.state.fontLoaded) 
       {    return <AppLoading />;     }
    
    return <HomeScreen/> ; 
  }
}
