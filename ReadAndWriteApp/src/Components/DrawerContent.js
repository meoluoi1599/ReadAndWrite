
import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import { View , Image, StyleSheet, Text, ImageBackground} from 'react-native';

import { AuthContext } from '../../App';

function DrawerContent(props) {
    const { signOut } = React.useContext(AuthContext);
    return (
      <DrawerContentScrollView {...props}>
        <ImageBackground
            source={require("../Images/header.png")}
            style={styles.imagebackground}
        >
            <Image 
                style={styles.profileIcon}
                source={{ uri: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg' }}
            />
            <View>
                <Text style={styles.title}>John Doe</Text>
                <Text style={styles.caption}>@j_doe</Text>
            </View>
        </ImageBackground>
        <View style={styles.itemList}>         
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons  
                        name="home" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons  
                        name="pencil-sharp" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Your stories"
                    onPress={() => {props.navigation.navigate('write')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="person-sharp" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Profile"
                    drawerContentOptions={{
                        activeBackgroundColor: '#93278f',
                    }}
                    onPress={() => props.navigation.navigate('profile')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="library-sharp" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Libary"
                    drawerContentOptions={{
                        activeBackgroundColor: '#93278f',
                    }}
                    onPress={() => props.navigation.navigate('libary')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="list" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Category"
                    drawerContentOptions={{
                        activeBackgroundColor: '#93278f',
                    }}
                    onPress={() => props.navigation.navigate('category')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="people" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Comunity"
                    drawerContentOptions={{
                        activeBackgroundColor: '#93278f',
                    }}
                    onPress={() => props.navigation.navigate('comunity')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="ios-notifications" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Notification"
                    drawerContentOptions={{
                        activeBackgroundColor: '#93278f',
                    }}
                    onPress={() => props.navigation.navigate('Notification')}
                />
                 <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="settings" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Settings"
                    drawerContentOptions={{
                        activeBackgroundColor: '#93278f',
                    }}
                    onPress={() => props.navigation.navigate('Home')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="exit" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    drawerContentOptions={{
                        activeBackgroundColor: '#93278f',
                    }}
                    onPress={() => {signOut()}}
                />
            </View>
      </DrawerContentScrollView>
    );
  } export {DrawerContent}

  const styles = StyleSheet.create({
    profileIcon: {
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white'
    },
    imagebackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "130%"
    },

    itemList: {
        marginTop: 50,
    }
  });