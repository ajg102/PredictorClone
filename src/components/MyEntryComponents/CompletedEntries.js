import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CompletedEntries() {
  return (
    <View style={styles.noContestsContainer}>
      <Text style={styles.noContestText}>
        You did not play in any contests in the last month.
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
