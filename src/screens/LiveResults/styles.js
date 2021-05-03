import {StyleSheet} from 'react-native';
import {MUTED} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MUTED,
  },
  noContestsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContestText: {
    fontSize: 16,
    color: '#323232',
    textAlign: 'center',
  },
});
