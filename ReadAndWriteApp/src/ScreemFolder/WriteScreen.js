import * as React from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, Modal} from 'react-native';
import {EmptyStory} from '../Components';
import {SplashScreen} from './SplashScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, Menu, Divider, Provider } from 'react-native-paper';

function WriteScreen({ navigation }) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const dataSource =  [
    {
      story_id: 1,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 2,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 3,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 4,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 5,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 6,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 7,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 8,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 9,
      story_title: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 10,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 11,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
    {
      story_id: 12,
      story_title: 'hhhhhhhhhhhhhh',
      story_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
      story_description: 'It often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using navigation.setOptions'
    },
  ]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isLoading ? <SplashScreen/> : (
        <View>
          {dataSource == [] ? <EmptyStory/>:(
            <FlatList
              data={dataSource}
              keyExtractor= {item => item.story_id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('DetailStory')}>         
                      <View style={style.container}>
                        <View style={{flex: 1}}>
                          <Image style={{width: 100, height: 120}}
                            source={{uri: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg'}} 
                          />
                        </View>
                        <View style={{flex: 2}}>
                        <View style={style.header}>
                            <Text  numberOfLines={1} style={{fontWeight: 'bold', fontSize: 18, flex:1}}>{item.story_title}</Text>
                            <Menu
                              visible={visible}
                              onDismiss={closeMenu}
                              anchor={
                              <TouchableOpacity onPress={openMenu}>
                                <Ionicons
                                  name="ellipsis-vertical-sharp"
                                  style={{fontSize: 24, marginLeft: 10, marginRight: 10}}
                                />
                              </TouchableOpacity>}>
                              <Menu.Item onPress={() => {}} title="Item 1" />
                              <Menu.Item onPress={() => {}} title="Item 2" />
                              <Menu.Item onPress={() => {}} title="Item 3" />
                            </Menu>
                          </View>
                          <Text numberOfLines={3}>{item.story_description} </Text>
                        </View>
                      </View>
                  </TouchableOpacity>
              )}
            />
          )}
        </View>
      )}
    </View>
      
  );
}
export {WriteScreen};

var style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row', 
    padding: 10,
    backgroundColor: 'white',
    width: Dimensions.get('window').width, 
    margin: 5, 
    height: 140
  },
  header: {
    flexDirection: 'row'
  }
})