import * as React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';


function SearchComponent(drawer) {
    return (
        <View style={{height:60, padding: 10, alignItems:'center', backgroundColor:'#C031C7', flexDirection:'row'}}{...drawer}>    
            <TouchableOpacity style={{flex:1}} onPress={()=> drawer.navigation.toggleDrawer()}>
                <Ionicons name='menu' size={50} color={'white'}/>
            </TouchableOpacity>
            <View style={{backgroundColor: 'white', alignItems:'center',flexDirection:'row', flex: 5, borderRadius:40}}>
                <Ionicons name='search-sharp' size={30} style={{marginLeft:10}}/>
                <TextInput placeholder='Search' />
            </View>
            <View style={{flex:1}}>
                <Ionicons name='person' size={40} color={'white'} style={{marginLeft:10}}/>
            </View>
        </View>
    );
}
export  {SearchComponent}

style = StyleSheet.create({
    
}) 