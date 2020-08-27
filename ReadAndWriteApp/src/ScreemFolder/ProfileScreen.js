import * as React from 'react';
import { Button, View, Text } from 'react-native';


function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ProfileScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
    );
}
export  {ProfileScreen};