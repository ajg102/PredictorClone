import React, {useState} from 'react';
import {View, Text} from 'react-native';
import HeaderToggle from '../../components/MyEntryComponents/HeaderToggle';
import UpcomingEntries from '../../components/MyEntryComponents/UpcomingEntries';
import CompletedEntries from '../../components/MyEntryComponents/CompletedEntries';
import styles from './styles';

export default function Entries() {
  const [mode, setMode] = useState('upcoming');
  return (
    <View style={styles.container}>
      <HeaderToggle mode={mode} setMode={setMode} />
      {mode === 'upcoming' && <UpcomingEntries />}
      {mode === 'completed' && <CompletedEntries />}
    </View>
  );
}
