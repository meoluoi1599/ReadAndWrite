import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import {LogInScreen, SignUpScreen} from '../ScreemFolder/LogInScreen';

const Stack = createStackNavigator();
function StackScreen ({ navigation }){
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="SignIn" component={LogInScreen} options={{
            headerShown: false
          }} />
      <Stack.Screen name="SignUp" component={SignUpScreen}  options={{
            headerShown: false
          }}/>
    </Stack.Navigator>
  )
} 
export {StackScreen};