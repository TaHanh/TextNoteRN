/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import styles from './NoteDetailStyle';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const NoteDetailScreen = (props) => {

  const [data, setData] = useState("Text Note");


  useEffect(()=>{
    setData(props.navigation.getParam('item'))
  })

  const onChangeText = (value) => {
    data.content = value;
    setData({
      data
    })
  }
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>{data ? data.title : "Text Note"}</Text>
        <View style={styles.rightHeader}>
          <TouchableOpacity>
            <Text style={styles.txtRightHeader}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txtRightHeader}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.txtInput}>
        <TextInput value={data.content} multiline numberOfLines={5} onChangeText={text => onChangeText(text)}  />
      </View>
      <View style={styles.containerBottom}>
      <TouchableOpacity  style={styles.btnSave}>
            <Text style={styles.txtRightHeader}>Lưu</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};
export default NoteDetailScreen;
