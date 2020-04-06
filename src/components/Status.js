import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {STATUS, PLAYERS} from '../utils/constants';
import Colors from '../theme/colors';
import PropTypes from 'prop-types';

const Status = (props) => {
  const buildStatus = (text) => (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  switch (props.status) {
    case STATUS.INIT:
    case STATUS.PLAY:
      return buildStatus('🎬 Next Player ' + props.player);
    case STATUS.WIN:
      return buildStatus(props.player + ' Is The Winner 🤩😎🥳');
    case STATUS.DRAW:
      return buildStatus('🤨😱😜 GAME OVER');
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Colors.Blue,
  },
  text: {
    textAlign: 'center',
    color: Colors.Text,
    fontSize: 25,
  },
});

Status.propTypes = {
  player: PropTypes.oneOf([PLAYERS.X, PLAYERS.O]).isRequired,
  status: PropTypes.oneOf([STATUS.DRAW, STATUS.INIT, STATUS.PLAY, STATUS.WIN])
    .isRequired,
};

export default Status;
