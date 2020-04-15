/* eslint-disable prettier/prettier */
import ApplicationStyle from '../../themes/Application.Style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyle,
  titleList: {
    fontSize: 16,
  },
  containerList: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
