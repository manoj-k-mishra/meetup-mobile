import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;

export default class LoginScreen extends Component 
{   state = {};
    render(){   return (<FlexContainer>
                          <Text>Login Page</Text>
                        </FlexContainer>
                      );
           }
}
     