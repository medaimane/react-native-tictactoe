import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';
import PropTypes from 'prop-types';
import {PLAYERS} from '../utils/constants';

const Board = (props) => (
  <View style={styles.container}>
    {props.squares.map((square, idx) => (
      <Square
        key={idx}
        value={square.value}
        isFilled={square.isFilled}
        isWin={square.isWin}
        onPress={() => props.onSquarePress(idx)}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 400,
    marginVertical: 16,
    paddingHorizontal: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.oneOf([PLAYERS.X, PLAYERS.O, '.']).isRequired,
      isFilled: PropTypes.bool.isRequired,
      isWin: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onSquarePress: PropTypes.func.isRequired,
};

export default Board;
