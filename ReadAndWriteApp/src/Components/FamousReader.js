import React, { useState } from 'react';
import { FlatList, StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import {SplashScreen} from '../ScreemFolder';

const DATA = [
  {
    user_id: 1,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
  {
    user_id: 2,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
  {
    user_id: 3,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
  {
    user_id: 4,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
  {
    user_id: 5,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
  {
    user_id: 6,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
  {
    user_id: 7,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
  {
    user_id: 8,
    avatar_img: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg',
  },
];
function  FamousReader() {
  [isLoading, setLoading] = React.useState(false)
  return (
    <View>
      {isLoading ? <SplashScreen/>: (
        <View>
          <Text style={style.text}>Famous Reader</Text>
          <View style={style.container}>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.user_id.toString()}
              renderItem={(item) => (
                <TouchableOpacity>
                    <Image style={style.image}
                        source={{uri: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg'}} 
                    />
                </TouchableOpacity>
              )}
            />
        </View>
        </View>
      )}
    </View>
  );
} export {FamousReader}

const style = StyleSheet.create({
    container: {
        padding: 5,
        
    },
    image: {
        marginRight: 10,
        width: 70, 
        height: 70, 
        borderRadius: 50
    },
    text: {
      margin: 5,
      fontSize: 20,
      fontWeight: 'bold',
    }
});
