import {StyleSheet} from 'react-native';
import {MUTED, BLACK} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MUTED,
  },
  titleText: {
    color: BLACK,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    paddingRight: 8,
  },
});
