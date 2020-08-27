import * as React from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, StatusBar} from 'react-native';


function LibariesScreen({ navigation }) {
  const data = [
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
      story_img: 'http://10.0.3.2:5555/return_img/2',
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
      story_title: 'hhhhhhhhhhhhhh',
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
      <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
              style= {{padding: 10}}
              numColumns={3}
              showsVerticalScrollIndicator = {false}
              data={data}
              keyExtractor= {item => item.story_id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('DetailStory', {data})}>         
                    <View style={style.container}>
                      <View style={{flex: 1}}>
                        <Image style={{width: 100, height: 120}}
                          source={{uri: item.story_img}}
                        />
                      </View>
                      <View style={{flex: -4}}>
                        <Text  numberOfLines={1} style={{ fontSize: 18}}>{item.story_title}</Text>
                      </View>
                    </View>
                </TouchableOpacity>
              )}
          />
      </View>
    );
}
export {LibariesScreen};

var style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column', 
    alignItems:'center', 
    padding: 5,
    flex: 1, 
    backgroundColor: 'white',
    width: 115,
    margin: 5, 
    height: 160,
  },
})
