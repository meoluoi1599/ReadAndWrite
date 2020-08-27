import * as React from 'react';
import { Button, View, Text } from 'react-native';

function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LibariesScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('LibariesScreen')}
        />
      </View>
    );
}
export {SettingsScreen};