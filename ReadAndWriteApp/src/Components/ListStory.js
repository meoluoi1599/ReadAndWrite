import * as React from 'react';
import { 
  View, 
  Text,
  FlatList, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';
import {SplashScreen} from '../ScreemFolder';


function ListStory(props) {
  const [dataSource, setDataSource ]= React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [page, setPages] = React.useState(1);
  
  React.useEffect(() => {
    // fetch('http://10.0.2.2:5000/')
    fetch('http://10.0.3.2:5555/' + page)
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

  loadMoreData = () => {
    fetch('http://10.0.3.2:5555/' + page)
    .then ((response) => response.json())
    .then ( (res) => { 
      if(res.length !=0){
        console.log('kq:' + res); 
        setDataSource(...dataSource, res);
        setPages(page+1);
      } else {
        alert('The end of data')
      }
    })
    .catch ((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
  }
  console.log(dataSource);
  return (  
    <View>
      {isLoading? <SplashScreen/>:(
        <View>
          <View><Text style={style.text}>List Story</Text></View>
          <FlatList
            data={dataSource}
            keyExtractor= {item => item.story_id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => props.navigation.navigate('DetailStory', {item: item})}>         
                  <View style={style.container}>
                    <View style={{flex: 1}}>
                      <Image style={{width: 100, height: 120}}
                        source= {{uri: item.story_img}}

                      />
                    </View>
                    <View style={{flex: 2}}>
                      <Text  numberOfLines={1} style={{fontWeight: 'bold', fontSize: 18}}>{item.story_title}</Text>
                      <Text numberOfLines={3}>{item.story_description} </Text>
                    </View>
                  </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  )
  
}
export {ListStory}

var style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row', 
    padding: 10,
    backgroundColor: 'white',
    width: Dimensions.get('window').width, 
    marginBottom: 5,
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    borderBottomWidth: 0.5,
    borderBottomColor:'grey',
    height: 140
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
})
