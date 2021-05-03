import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function UpcomingEntries() {
  return (
    <View style={styles.noContestsContainer}>
      <Text style={styles.noContestText}>
        You have no upcoming contests. Return to the lobby to enter a contest.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noContestsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContestText: {
    fontSize: 16,
    color: '#323232',
    textAlign: 'center',
    width: '80%',
  },
});
