/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from './ListNoteStyle';
import update from 'immutability-helper';

const ListNoteScreen = (props) => {
  const [data, setData] = useState([
          {title: 'Dan',content: "abc" },
          {title: 'Dominic',content: "abc"},
          {title: 'Jackson',content: "abc"},
          {title: 'James',content: "abc"},
          {title: 'Joel',content: "abc"},
          {title: 'John',content: "abc"},
          {title: 'Jillian',content: "abc"},
          {title: 'Jimmy',content: "abc"},
          {title: 'Julie',content: "abc"},
       
  ])
  const callBack= (key, value) => {
    switch (key) {
      case "DELETE":
        const newData = data.filter((item, index) => {
          return value !== index;
        })
        setData(newData)
        break;
      case "SAVE":
        console.log(value)
        const newUpdate = update(data, {
          [value.index]: {
            $merge: {
              content: value.content,
            },
          },
        });
        setData(newUpdate);
        break;
      case "EDIT_TITLE":
        console.log(value)
        data[value.index].title = value.title;
        setData(data)
        break;
      default:
        break;
    }
  }
  const clickNoteDetail = (item, index) => {
      props.navigation.navigate('NoteDetail', {
        item,
        index,
        callBack
      });
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Text Note</Text>
      </View>
      
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => clickNoteDetail(item, index)}>
              <View style={styles.containerList} key={{index}}>
            <Text style={styles.titleList}>{item.title}</Text>
            <View>
            <Text style={styles.titleList}>{item.content}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default ListNoteScreen;
