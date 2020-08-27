import React from 'react';
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import {WriteScreen, LibariesScreen} from '../ScreemFolder';

const LibaryStack = createStackNavigator();
const LibaryStackScreen = ({ navigation }) => (
  <LibaryStack.Navigator mode="modal">
    <LibaryStack.Screen 
      name="libary"
      component={LibariesScreen} 
      options = {{
        title: 'Libary',
            headerStyle: {
              backgroundColor: '#C031C7',
            },
            headerTintColor: '#fff',
        }}
    />
    <LibaryStack.Screen
      name="DetailStory"
      component={LibariesScreen} 
      options = {{
        title: 'Libary',
            headerStyle: {
              backgroundColor: '#C031C7',
            },
            headerTintColor: '#fff',
        }}
    />
  </LibaryStack.Navigator>
)
export {LibaryStackScreen};