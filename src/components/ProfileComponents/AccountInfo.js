import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PRIMARY, WHITE} from '../../constants/colors';

export default function AccountInfo() {
  const changeImageHandler = () => {
    alert('Image change');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={changeImageHandler}>
        <Image
          source={{uri: 'https://picsum.photos/id/1005/200/300'}}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.accountName}>ajg102</Text>
        <Text style={styles.locationText}>Pennsylvania</Text>
        <Text style={styles.accountBalance}>Account Balance: $0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#171717',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 6,
  },
  avatarContainer: {
    width: '30%',
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    borderRadius: 9999,
    height: '100%',
    width: '100%',
    borderWidth: 1,
    borderColor: WHITE,
    resizeMode: 'contain',
  },
  infoContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  accountName: {
    fontSize: 28,
    color: PRIMARY,
    fontWeight: '700',
  },
  locationText: {
    fontSize: 20,
    color: '#d9381e',
  },
  accountBalance: {
    color: WHITE,
    fontSize: 14,
  },
});
