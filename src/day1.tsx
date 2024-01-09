import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
} from 'react-native';

const Day1 = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Day1')}
      />
    </View>
  );
};

export default Day1;
