/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import styles from './NoteDetailStyle';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const NoteDetailScreen = (props) => {

  const [data, setData] = useState("Text Note");

console.log(props.navigation.getParam('item'))
  useEffect(()=>{
    setData(props.navigation.getParam('item'))
  }, []);

  const onChangeText = (value) => {
    setData((arg) => ({
      ...arg,
      content: value,
    }));
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  const deleteItem = () => {
    goBack();
    props.navigation.state.params.callBack(
      "DELETE",
      props.navigation.getParam('index')
    );
  
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.rightHeader}>
        <TouchableOpacity onPress={goBack}>
            <Text style={styles.txtRightHeader}>Back</Text>
          </TouchableOpacity>
           <Text style={styles.txtHeader}>{data ? data.title : "Text Note"}</Text>
        </View>
       
        <View style={styles.rightHeader}>
          <TouchableOpacity>
            <Text style={styles.txtRightHeader}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteItem} >
            <Text style={styles.txtRightHeader}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.txtInput}>
        <TextInput value={data.content} multiline numberOfLines={5} onChangeText={onChangeText}  />
      </View>
      <View style={styles.containerBottom}>
      <TouchableOpacity  style={styles.btnSave}>
            <Text style={styles.txtRightHeader}>Lưu</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default NoteDetailScreen;
