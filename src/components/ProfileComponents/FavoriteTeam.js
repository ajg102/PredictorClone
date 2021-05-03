import React, {useMemo} from 'react';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BLACK} from '../../constants/colors';

export default function FavoriteTeam({favorite = {}, gameMode = ''}) {
  const {name = '', imageUrl = null} = favorite;
  const favoriteType = useMemo(() => {
    switch (gameMode) {
      case 'golf':
        return 'golfer';
      case 'nascar':
        return 'driver';
      default:
        return 'team';
    }
  }, [gameMode]);
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleText}>Favorite Team</Text>
      {!imageUrl ? (
        <Text style={styles.noFavoriteText}>
          Click here to select your favorite {favoriteType}!
        </Text>
      ) : (
        <Image source={{uri: imageUrl}} style={styles.favoriteImage} />
      )}
      {name !== '' && <Text style={styles.favoriteName}>{name}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
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
  noFavoriteText: {
    fontSize: 12,
    fontWeight: '300',
    width: '80%',
    textAlign: 'center',
    paddingVertical: 36,
  },
  favoriteImage: {
    width: '80%',
    height: 56,
    resizeMode: 'contain',
  },
  favoriteName: {
    color: BLACK,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
