import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BLACK, PRIMARY} from '../../constants/colors';

export default function HeaderToggle({mode = 'upcoming', setMode}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.headerOptionContainer,
          mode === 'upcoming' && {borderBottomColor: PRIMARY},
        ]}
        onPress={() => setMode('upcoming')}>
        <Text style={styles.headerText}>Upcoming</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.headerOptionContainer,
          mode === 'completed' && {borderBottomColor: PRIMARY},
        ]}
        onPress={() => setMode('completed')}>
        <Text style={styles.headerText}>Completed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
  },
  headerOptionContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderBottomColor: BLACK,
  },
  headerText: {
    textAlign: 'center',
    color: BLACK,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
