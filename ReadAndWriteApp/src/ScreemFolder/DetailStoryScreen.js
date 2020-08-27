import * as React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {Dropdown} from 'react-native-material-dropdown-v2'
import { Button, Menu, Divider, Provider } from 'react-native-paper';

function DetailStoryScreen(props) {
  const [dataSource, setDataSource] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  React.useEffect(() => {
    // fetch('http://10.0.2.2:5000/')
    fetch('http://10.0.3.2:5555/chapter/' + props.route.params.item.story_id)
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

    fetch('http://10.0.3.2:5555/user/' + props.route.params.item.author_id)
    .then ((response) => response.json())
    .then ( (res) => { 
      console.log('user:' + res); 
      setUserData(res);
    })
    .catch ((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false) 
    });
  });
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style={style.container}>
          <TouchableOpacity>
            <Image style={style.image}
                source={{uri: props.route.params.item.story_img}} 
            />
          </TouchableOpacity>
            <Text style={{fontSize: 30, marginTop: 10}}>{props.route.params.item.story_title}</Text>
          <View>
            <TouchableOpacity style={style.author}>
              <Image style={style.avatar}
                  source={{uri: 'https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-khoc-.jpg'}} 
              />
              <Text style={{marginLeft: 5}}>{}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.button}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Reading', {'chapter_id': 0} )}>
              <View style={style.reading}>
                <Text style={style.readingText}>Reading</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                  <Icon name='add-circle' style={style.addButton}/>
                </View>
            </TouchableOpacity>
        </View>
        <View style={style.description}>
            <Text style={{fontSize: 16}}>{props.route.params.item.story_description}</Text>
        </View>

        <View>
          <Provider>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                <TouchableOpacity onPress={openMenu}>
                  <Text>Part of story</Text>
                </TouchableOpacity>}>
                <Menu.Item>
                <FlatList
                  data={dataSource}
                  keyExtractor={item => item.chapter_id.toString()}
                  renderItem={({item}) => (
                    <Menu.Item onPress={() => {}} title={item.chapter_name} />
                  )}
                  showsHorizontalScrollIndicator={false}
                />
                </Menu.Item>
              </Menu>
          </Provider>
        </View>
      </ScrollView>
    </View>
  );
}
export {DetailStoryScreen};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 200
  },
  author: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 50
  },
  button: {
    marginTop: 10, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  reading: {
    height: 40, width: 200, 
    backgroundColor: '#DDA0DD', 
    borderRadius: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  readingText: {
    marginLeft: 5, 
    fontWeight: 'bold', 
    fontSize: 20, 
    color: 'white' 
  },
  addButton: {
    color: '#A9A9A9', 
    fontSize: 40, 
    marginLeft: 5
  },
  description: {
    padding: 20,
  }
}) 