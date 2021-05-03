import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BLACK} from '../../constants/colors';

export default function BestPastScore({score = 0, occurredOn = null}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Best Past Score</Text>
      {score === 0 ? (
        <Text style={styles.noScoreText}>You don't have a best score yet!</Text>
      ) : (
        <Text style={styles.scoreText}>
          <Text style={{fontSize: 64}}>{score}</Text>
          <Text>pts</Text>
        </Text>
      )}
      {occurredOn && <Text style={styles.occurredOnText}>{occurredOn}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    borderLeftWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: BLACK,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  noScoreText: {
    fontSize: 12,
    fontWeight: '300',
    width: '80%',
    textAlign: 'center',
    paddingVertical: 36,
  },
  scoreText: {
    color: '#d9381e',
    fontWeight: 'bold',
    paddingVertical: 36,
  },
  occurredOnText: {
    color: BLACK,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
