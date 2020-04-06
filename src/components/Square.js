import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../theme/colors';
import PropTypes from 'prop-types';
import {PLAYERS} from '../utils/constants';

const Square = (props) => {
  const backgroundColor = props.isWin ? Colors.Red : Colors.Yellow;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      disabled={props.isFilled}
      onPress={props.onPress}>
      <Text style={styles.value}>{props.value}</Text>
    </TouchableOpacity>
  );
};

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

Square.propTypes = {
  value: PropTypes.oneOf([PLAYERS.X, PLAYERS.O, '.']).isRequired,
  isWin: PropTypes.bool.isRequired,
  isFilled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Square;
