/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {Alert, View, Text, FlatList, ScrollView, Modal, Image} from 'react-native';
import styles from './NoteDetailStyle';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const NoteDetailScreen = (props) => {

  const [data, setData] = useState("Text Note");
  const [modalVisible, setModalVisible] = useState(false);
console.log(props.navigation.getParam('item'))
  useEffect(()=>{
    setData(props.navigation.getParam('item'))
  
  }, [])

  const onChangeText = (key, value) => {
    switch (key) {
      case "TITLE":
        setData((arg) => ({
          ...arg,
          title: value,
        }));
        break;
        case "CONTENT":
          setData((arg) => ({
            ...arg,
            content: value,
          }));
          break;
      default:
        break;
    }
   
  }

  const goBack = (data) => {
    props.navigation.goBack(data);
  }

  const deleteItem = () => {
    props.navigation.state.params.callBack(
      "DELETE", 
      props.navigation.getParam('index')
    );
    goBack(null);
  }
  const saveItem = () => {
    props.navigation.state.params.callBack(
      "SAVE", 
      {
        index: props.navigation.getParam('index'),
        content: data.content
      }
    );
    goBack(null);
  }
  const editTitle = () => {
    props.navigation.state.params.callBack(
      "EDIT_TITLE", 
      {
        index: props.navigation.getParam('index'),
        title: data.title
      }
    );
    goBack(null);
  }
  
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.rightHeader}>
        <TouchableOpacity onPress={() => goBack(null)}>
        <Image
        style={styles.iconBack}
        source={require('../../assets/images/ic_back.png')}
      />
          </TouchableOpacity>
           <Text numberOfLines={1} style={styles.txtHeader}>{data ? data.title : "Text Note"}</Text>
           <TouchableOpacity onPress={()=> { setModalVisible(true);}}>
           <Image
        style={styles.iconEdit}
        source={require('../../assets/images/ic_edit.png')}
      />
          </TouchableOpacity>
        </View>
       
        <View style={styles.rightHeader}>
          
          <TouchableOpacity onPress={() => deleteItem()} >
          <Image
        style={styles.iconDel}
        source={require('../../assets/images/ic_trash.png')}
      />
            
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.txtInput}>
        <TextInput value={data.content} multiline numberOfLines={5} onChangeText={text => onChangeText("CONTENT", text)}  />
      </View>
      <View style={styles.containerBottom}>
      <TouchableOpacity  style={styles.btnSave} onPress={saveItem}>
            <Text style={styles.txtRightHeader}>Lưu</Text>
          </TouchableOpacity>
      </View>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
  
            <TextInput style={styles.modalTextInput} value={data.title} onChangeText={text => onChangeText("TITLE", text)} />
        <View style={styles.modalBottom}>
        <TouchableOpacity
              style={{ ...styles.modalBtn, backgroundColor: "#2196F3" }}
              onPress={() => {
                editTitle();
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>LƯU</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.modalBtn, backgroundColor: "red" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>HỦY</Text>
            </TouchableOpacity>
        </View>
          
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
export default NoteDetailScreen;