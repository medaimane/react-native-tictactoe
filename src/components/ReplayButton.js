import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../theme/colors';

const ReplayButton = (props) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.text}>{'Replay'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 16,
    backgroundColor: Colors.Green,
  },
  text: {
    textAlign: 'center',
    color: Colors.Blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReplayButton;
