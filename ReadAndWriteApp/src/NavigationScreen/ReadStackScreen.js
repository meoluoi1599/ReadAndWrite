import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 

import {HomeScreen, DetailStoryScreen, ReadingScreen} from '../ScreemFolder';
import {SearchComponent} from '../Components';

const ReadStack = createStackNavigator();
const ReadStackScreen = (props, {navigation}) => (
<ReadStack.Navigator mode="modal" searchContent={props => <SearchComponent {...props}/>}>
    <ReadStack.Screen 
      name="Home" 
      component={HomeScreen}
      options = {{
       headerShown: false
      }}
    />
    <ReadStack.Screen name="DetailStory" label='Detail Story' component={DetailStoryScreen} />
    <ReadStack.Screen name="Reading" label= 'Reading' component={ReadingScreen} />
  </ReadStack.Navigator>
)
export {ReadStackScreen};
