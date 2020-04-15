/* eslint-disable prettier/prettier */
import colors from './Colors';
import {Dimensions, Platform, StyleSheet} from 'react-native';

const ApplicationStyle = StyleSheet.create({
  header:{
backgroundColor: 'green',
paddingHorizontal: 15,
paddingVertical: 15,
  },
  txtHeader: {
    color: '#ffffff',
    fontSize: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgRoot,
  },
  toolbar: {
    flexDirection: 'row',
    width: '100%',
    height: Platform.OS === 'android' ? 48 : isIphoneX() ? 88 : 78,
    paddingTop: Platform.OS === 'android' ? 0 : isIphoneX() ? 40 : 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
});

export default ApplicationStyle;

export function isIphoneX() {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

export function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}
