/* eslint-disable prettier/prettier */
import ApplicationStyle from '../../themes/Application.Style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyle,
  titleList: {
    fontSize: 16,
  },
  iconBack: {
    width: 25,
    resizeMode: 'contain',
    height: 25
  },
  iconEdit: {
    width: 20,
    resizeMode: 'contain',
    height: 20
  },
  iconDel: {
    width: 30,
    resizeMode: 'contain',
    height: 30
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
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  
  },
  modalView: {
    // margin: 20,
    width: '80%',
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingTop: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalBtn: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    marginLeft: 15,
    marginVertical: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  modalTextInput: {
    // marginBottom: 15,
    // textAlign: "center"
   borderColor: 'grey',
   borderWidth: 0.5,
   width: '100%',
    paddingHorizontal: 10,
  },
  modalBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  }
});
