import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

import Colors from '../../constants/Colors';

//----stateless component ---if sarts with const---else its a class--with state
//meta---coming from redux-form
const TextInputWithValidations = ({  input,  containerStyle,  label,  meta: { touched, error },  ...custom}) => 
  (  <View style={containerStyle}>
      <FormLabel fontFamily="montserrat" labelStyle={{ color: Colors.blackBlueColor }}>  {label}  </FormLabel>
      <FormInput {...input} {...custom} />
        {error && touched &&
        <FormValidationMessage fontFamily="montserrat" labelStyle={{ color: Colors.redColor }}>
            {error}
        </FormValidationMessage>
        }
  </View>
);

export default TextInputWithValidations;