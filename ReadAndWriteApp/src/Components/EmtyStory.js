import * as React from 'react';
import { Button, View, Text } from 'react-native';

function EmptyStory({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>You haven't published any stories</Text>
        <Button onPress={() => navigation.navigate('NewStory')} title="Create new story" />
      </View>
    );
  } export {EmptyStory}