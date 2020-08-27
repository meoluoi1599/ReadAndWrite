import * as React from 'react';
import { View, Text, StyleSheet, FlatList  } from 'react-native';
import {ListStory, Category, FamousReader, SearchComponent} from '../Components';

function HomeScreen(props) {
  const data = [
    {id:"1"}
  ]
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}> 
      <View style={{flex: 1}}>
        <SearchComponent {...props}/>
      </View>
      <View style={{flex: 10}}>
        <FlatList
          data={data}
          renderItem={(item) => (
            <>
              <Category/> 
              <FamousReader/>
              <ListStory {...props} />
            </>
          )}
          showsVerticalScrollIndicator = {false}
          keyExtractor={item => item.id}
          />
      </View>
    </View>
  )
  
}
export {HomeScreen};
