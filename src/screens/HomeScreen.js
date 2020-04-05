import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../theme/colors';
import Game from '../components/Game';

const title = 'Tic Tac Toe';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Game />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 8,
    color: Colors.Text,
    fontSize: 30,
  },
});

export default HomeScreen;
