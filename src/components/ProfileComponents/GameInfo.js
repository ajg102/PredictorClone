import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WHITE} from '../../constants/colors';
import BestPastScore from './BestPastScore';
import FavoriteTeam from './FavoriteTeam';

export default function GameInfo({
  gameMode = '',
  favorite = {},
  bestScore = 0,
  occurredOn = null,
}) {
  const headerTitle = useMemo(() => {
    switch (gameMode) {
      case 'nba':
        return "Pick N' Roll";
      case 'nfl':
        return 'Sunday Night 7';
      case 'premier_league':
        return 'Premier League';
      case 'nascar':
        return 'Nascar';
      case 'golf':
        return 'Golf';
      default:
        return 'NBC';
    }
  }, [gameMode]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{headerTitle}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <FavoriteTeam favorite={favorite} gameMode={gameMode} />
        <BestPastScore score={bestScore} occurredOn={occurredOn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 6,
    backgroundColor: WHITE,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 6,
    height: 40,
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
  },
});
