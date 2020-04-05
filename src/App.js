import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Colors from './theme/colors';
import HomeScreen from './screens/HomeScreen';

const App = () => (
  <>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});

export default App;
