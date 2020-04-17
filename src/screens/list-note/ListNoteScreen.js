/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from './ListNoteStyle';

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
        console.log(value)
        const newData = data.splice(value, 1);
        setData(newData)
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
            <Text style={styles.titleList}>{item.title}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default ListNoteScreen;
