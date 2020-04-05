import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../theme/colors';

const Square = (props) => (
  <TouchableOpacity
    style={styles.container}
    disabled={props.isFilled}
    onPress={props.onPress}>
    <Text style={styles.value}>{props.value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: Colors.Background,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: Colors.Yellow,
  },
  value: {
    color: Colors.Red,
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default Square;
