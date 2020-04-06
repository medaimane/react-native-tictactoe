import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from './theme/colors';

const Creator = () => (
  <View>
    <Text style={styles.text}>{'made by medaimane'}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.Text,
    fontSize: 15,
  },
});

export default Creator;
