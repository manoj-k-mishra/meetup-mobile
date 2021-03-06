import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import styled from 'styled-components/native';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Facebook, Google } from 'expo';
import fbConfig from '../../../constants/fbConfig';
import googleConfig from '../../../constants/googleConfig';
import Expo from 'expo';
import { connect } from 'react-redux';
import { login } from './actions';
import { LoadingScreen } from '../../commons';

const FlexContainer = styled.View`flex: 1;  justifyContent: center;  alignItems: center;  alignSelf: stretch;`;
const MeetupText = styled.Text` color: ${Colors.$redColor};  fontSize: 18;  fontFamily: montserratBold;`;
const BottomButtonWrapper = styled.View`  flex: 0.2;  flexDirection: row;`;
const Button = styled.TouchableOpacity`  justifyContent: space-around;  alignItems: center;  flex: 1;  backgroundColor: ${({ color }) => color};
  flexDirection: row;  paddingHorizontal: 10;`;

  @connect(state => ({
    isLoading: state.user.isLoading,
  }), { login })
export default class LoginScreen extends Component 
{     state = {};
      _onLoginPress = name => 
      {  if (name === 'facebook') {    this._logInWithFacebook();  } 
        else {  this._logInWithGoogle();  }
      };
  
      async _logInWithFacebook() 
      { const { type,token,  } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, 
                                    {  permissions: ['public_profile', 'email'],  });
            if (type === 'success') {  this.props.login(token, 'facebook');
                                     // const resp=await fetch(`https://graph.facebook.com/me?access_token=${token}`,);
                                     // Alert.alert('Logged In!', `Hi ${(await resp.json()).name}`)
                                     } 
            else {  throw new Error('Something wrong with facebook auth!');  }
      }

      async _logInWithGoogle() 
      {  try {  
             const result = await Expo.Google.logInAsync(
                {  androidClientId: googleConfig.CLIENT_ID_IOS,
                   scopes: ['profile', 'email'],
                });
               if (result.type === 'success') 
                {  this.props.login(result.accessToken, 'google');  
                //  Alert.alert( ` Loged in with google ${result.accessToken}`)
                 // console.log('google success', result.accessToken);
                } 
               else {  console.log('google fail1');
                  return { cancelled: true }; 
                 }
             } catch (e) {  console.log('google fail2'); throw e;  }
      }

    render(){   if (this.props.isLoading) {    return <LoadingScreen color={Colors.redColor} />;    }
                return (<FlexContainer>
                          <FlexContainer>
                            <Text style={Fonts.authTitle}>Meetup Me</Text>
                          </FlexContainer>
                          <FlexContainer>
                            <FlexContainer>
                              <FlexContainer>
                                <Text style={Fonts.authWelcomeTitle}>Welcome!</Text>
                              </FlexContainer>
                              <FlexContainer>
                                <Text style={Fonts.authWelcomeText}>  Start managing your  {' '} 
                                    <MeetupText>Meetups</MeetupText>  {' '} quickly and efficently
                                </Text>
                              </FlexContainer>
                            </FlexContainer>
                            <BottomButtonWrapper>
                              <Button  color="#db3236" onPress={() => this._onLoginPress('google')} >
                                <Text style={Fonts.buttonAuth}>Connect with</Text>
                                <MaterialCommunityIcons name="google" size={30} color="#fff" />
                              </Button>
                              <Button  color="#3b5998" onPress={() => this._onLoginPress('facebook')}>
                                <Text style={Fonts.buttonAuth}>Connect with</Text>
                                <MaterialCommunityIcons name="facebook" size={30} color="#fff" />
                              </Button>
                            </BottomButtonWrapper>
                          </FlexContainer>
                      </FlexContainer>
                      );
           }
}
     