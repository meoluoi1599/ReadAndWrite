import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 

import {
  WriteScreen, 
  ProfileScreen, 
  CategoryScreen
} from '../ScreemFolder';
import {TabsScreen} from './TabsScreen';
import {DrawerContent, SearchComponent} from '../Components';
import {LibaryStackScreen} from './LibaryStackScreen';


const Drawer = createDrawerNavigator();
const DrawerScreen =({ navigation })=> (
<Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} searchComponet={drawer => <SearchComponent {...drawer}/>}  mode="modal">
    <Drawer.Screen 
      name="Home" 
      component={TabsScreen} 
    />
    <Drawer.Screen name="category" component={CategoryScreen}/>
    <Drawer.Screen name="write" component={WriteScreen}/>
    <Drawer.Screen name="profile" component={ProfileScreen}/>
    <Drawer.Screen name="libary" component={LibaryStackScreen}/>
  </Drawer.Navigator>
)
export {DrawerScreen}