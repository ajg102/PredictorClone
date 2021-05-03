import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function LiveResults() {
  const results = null;
  return (
    <View style={styles.container}>
      {!results && (
        <View style={styles.noContestsContainer}>
          <Text style={styles.noContestText}>
            You have no live contests at this time.
          </Text>
        </View>
      )}
    </View>
  );
}
