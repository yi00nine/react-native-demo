import React, {useState, useRef} from 'react';
import {
  View,
  Button,
  ActivityIndicator,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  SectionList,
} from 'react-native';

const HomePage = ({navigation}) => {
  const [searchString, setSearchString] = useState('test');
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef: any = useRef(null);

  let spinner = isLoading ? (
    <ActivityIndicator color="#0000ff" size="large" />
  ) : (
    <View />
  );
  const handlePress = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      navigation.push('Result', {data: searchString});
      timeoutRef.current = null;
    }, 1000);
  };
  const handleChange = event => {
    setSearchString(event.nativeEvent.text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Search for item!</Text>
      <View style={styles.flowRight}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search via name or postcode"
          value={searchString}
          onChange={handleChange}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#99d9f4"
          onPress={handlePress}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight>
      </View>
      {spinner}
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

const DATA = [
  {
    title: 'default',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
];

const Result = ({route}) => {
  DATA[0].title = route.params.data;
  return (
    <SafeAreaView style={styles1.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles1.item}>
            <Text style={styles1.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles1.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export {HomePage, Result};
