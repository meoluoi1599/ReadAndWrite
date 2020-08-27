import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 

import {RingScreen} from '../ScreemFolder';
import {LibaryStackScreen} from './LibaryStackScreen';
import {ReadStackScreen} from './ReadStackScreen';
import {WriteStackScreen} from './WriteStackScreen';

const Tabs = createBottomTabNavigator();
const TabsScreen = ({ navigation }) => (
    <Tabs.Navigator 
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }} 
          mode="modal"
        >
        <Tabs.Screen 
          name="Home"
          component={ReadStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, focused}) => (
              <Ionicons name="home"  size={size} color={focused ? '#C031C7' : 'gray'} />
            ),
          }}
        />
        <Tabs.Screen 
          name="Libaries" 
          component={LibaryStackScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, size }) => (
              <Ionicons name="library-sharp" color={focused ? '#C031C7' : 'gray'} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="YourStory" 
          component={WriteStackScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name="pencil-sharp" color={focused ? '#C031C7' : 'gray'} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="Ring" 
          component={RingScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name="notifications-sharp" color={focused ? '#C031C7' : 'gray'} size={size} />
            ),
          }}
        />
        </Tabs.Navigator>
  )
  export {TabsScreen};