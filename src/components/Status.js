import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {STATUS} from '../utils/constants';
import Colors from '../theme/colors';

const Status = (props) => {
  const buildStatus = (text) => (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  switch (props.status) {
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
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: Colors.Text,
    fontSize: 30,
    lineHeight: 30,
  },
});

export default Status;
