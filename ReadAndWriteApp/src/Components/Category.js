import * as React from 'react';
import { 
  View, 
  FlatList,
  TouchableOpacity, 
  Text
} from 'react-native';
import {SplashScreen} from '../ScreemFolder/';


function Category() {
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
    <View>
    {isLoading ? <SplashScreen/> : (
      <View>
        <FlatList
          data={dataSource}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor= {item => item.category_id.toString()}
          renderItem={({item}) => (
           <TouchableOpacity  style={{padding: 5}}>
             <Text style={{
                backgroundColor: '#DDA0DD', 
                borderRadius: 40,
                padding: 5,
                shadowColor: "#BA55D3",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
                {item.category}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )}
  </View>

  );
  
}
export {Category}

