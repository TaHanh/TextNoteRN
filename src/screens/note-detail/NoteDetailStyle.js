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
  txtInput: {
    paddingHorizontal: 10,
    // paddingVertical: 10,
    margin: 10,
    borderColor: "grey",
    borderWidth: 1
  },
  containerBottom: {
flexDirection: 'row',
justifyContent: 'flex-end',
marginRight: 15,
marginBottom: 30
  },
  btnSave: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
    
  }
});
