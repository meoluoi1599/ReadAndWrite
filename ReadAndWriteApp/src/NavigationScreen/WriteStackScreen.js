import React from 'react';
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

import {WriteScreen, NewStory} from '../ScreemFolder';

const WriteStack = createStackNavigator();
const WriteStackScreen = ({ navigation }) => (
  <WriteStack.Navigator mode="modal">
    <WriteStack.Screen
      name="YourStory"
      component={WriteScreen} 
      options = {{
        title: 'Your story',
        headerStyle: {
          backgroundColor: '#C031C7',
        },
      }}

    />
    <WriteStack.Screen
      name="NewPart"
      component={NewStory} 
      options = {{
        title: 'Write your story',
            headerStyle: {
              backgroundColor: '#C031C7',
            },
            headerTintColor: '#fff',
        }}
    />
  </WriteStack.Navigator>
)
export  {WriteStackScreen};