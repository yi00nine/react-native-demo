/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Util from './src/utils';

import {HomePage, Result} from './src/day1';
const Stack = createNativeStackNavigator();

const GridPage = ({navigation}) => {
  const boxs = [...Array(30)].map((_, index) => (
    <TouchableHighlight
      key={index}
      style={styles.touchBox}
      underlayColor="#eee"
      onPress={() => navigation.navigate('Day' + (index + 1))}>
      <View style={styles.boxContainer}>
        <Text style={styles.boxText}>Day{index + 1}</Text>
      </View>
    </TouchableHighlight>
  ));
  return (
    <ScrollView style={styles.container}>
      <View style={styles.touchBoxContainer}>{boxs}</View>
    </ScrollView>
  );
};
const Day1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Day1" component={HomePage} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="首页"
          component={GridPage}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Day1"
          component={Day1}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 63,
  },
  touchBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor: '#ccc',
    borderLeftWidth: Util.pixel,
    borderLeftColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc',
  },
  touchBox: {
    width: Util.size.width / 3 - 0.33334,
    height: Util.size.width / 3,
    backgroundColor: '#fff',
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc',
    borderLeftWidth: Util.pixel,
    borderLeftColor: '#ccc',
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Util.size.width / 3,
    height: Util.size.width / 3,
  },
  boxText: {
    position: 'absolute',
    bottom: 45,
    width: Util.size.width / 3,
    textAlign: 'center',
    left: 0,
    backgroundColor: 'transparent',
  },
});
export default App;
