import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors1 from './constants/Colors';
//import { HomeScreen } from './src/screens'
//import { cachedFonts } from './helpers';
import { fontAssets } from './helpers';
import Expo, { AppLoading } from 'expo';
import Root from './src/Root';
import { Provider } from 'react-redux'; //for redux
import store from './src/redux/store';

import { persistStore } from 'redux-persist';
import { AsyncStorage, UIManager } from 'react-native';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

EStyleSheet.build(Colors1);

export default class App extends React.Component 
{ state = {    fontLoaded: false, ready: false}
  componentDidMount() 
  {  this._loadAssetsAsync();
     persistStore( store, { storage: AsyncStorage,  whitelist: [ 'user', ],  },
                   () => this.setState({ ready: true })
              );
  }
  async _loadAssetsAsync()
     {  await Promise.all(fontAssets);
        this.setState({ fontLoaded: true });
     }
     //Apploading is --added at the end of day3---only for fonts
     //----Root added in place of homescreen---in day4 beginning to introduce navigation
  render() 
  {  if (!this.state.fontLoaded || !this.state.ready) 
       {  return <AppLoading />;  }
       return ( <Provider store={store}>  
                <Root />   
                </Provider>  
        );
  }
}
