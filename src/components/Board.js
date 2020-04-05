import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';

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
    margin: 16,
    width: 400,
    paddingHorizontal: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Board;
