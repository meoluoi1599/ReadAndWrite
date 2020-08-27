import * as React from 'react';
import { 
  View, 
  FlatList,
  TouchableOpacity, 
  StyleSheet, 
  Text
} from 'react-native';
import {SplashScreen} from './SplashScreen';


function CategoryScreen() {
  const [dataSource, setDataSource ]= React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    // fetch('http://10.0.2.2:5000/')
    fetch('http://10.0.3.2:5555/category')
    .then ((response) => response.json())
    .then ( (res) => { 
      console.log('kq:' + res); 
      setDataSource(res);
    })
    .catch ((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false) 
    });
  });
  return (
    <View style={{ flex: 1, padding: 10 }}>
    {isLoading ? <SplashScreen/> : (
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator = {false}
        data={dataSource}
        keyExtractor= {item => item.category_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Detail Story Screen')}>
            <Text style={style.category}> {item.category} </Text>
          </TouchableOpacity>
        )}
      />
    )}
  </View>

  );
  
}
export {CategoryScreen};

style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems:'center',
  },
  category: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: '#f9c2ff',
  }
});

