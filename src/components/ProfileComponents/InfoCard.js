import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../constants/colors';

export default function InfoCard({onPress = () => {}, children, title}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {title ? <Text style={styles.titleText}>{title}</Text> : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: WHITE,
    marginBottom: 6,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
  },
  titleText: {
    color: BLACK,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
