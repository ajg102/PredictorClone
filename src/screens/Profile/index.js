import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountInfo from '../../components/ProfileComponents/AccountInfo';
import InfoCard from '../../components/ProfileComponents/InfoCard';
import GameInfo from '../../components/ProfileComponents/GameInfo';
import {PRIMARY} from '../../constants/colors';

export default function Profile() {
  const gameInfo = useSelector(state => state.gameInfo.games) || [];
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingHorizontal: 12, paddingVertical: 6}}>
      <AccountInfo />
      <InfoCard title="about the app" />
      <InfoCard title="contact support" />
      <InfoCard title="withdraw funds" />
      <InfoCard title="official rules" />
      <InfoCard>
        <Text style={styles.titleText}>Rate on the app store</Text>
        <MaterialIcon name="star" color={PRIMARY} size={14} />
        <MaterialIcon name="star" color={PRIMARY} size={14} />
        <MaterialIcon name="star" color={PRIMARY} size={14} />
        <MaterialIcon name="star" color={PRIMARY} size={14} />
        <MaterialIcon name="star" color={PRIMARY} size={14} />
      </InfoCard>
      {gameInfo.map((game, index) => (
        <GameInfo {...game} key={`${index}`} />
      ))}
    </ScrollView>
  );
}
