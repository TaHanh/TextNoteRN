/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from './ListNoteStyle';

const ListNoteScreen = () => {
  const clickNoteDetail = () => {

  }
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Text Note</Text>
      </View>
      
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={clickNoteDetail}>
              <View style={styles.containerList} key={{index}}>
            <Text style={styles.titleList}>{item.key}</Text>
            <View>
            <Text style={styles.titleList}>{item.key}</Text>
            </View>
          </View>
          </TouchableOpacity>
        
        )}
      />
    </View>
  );
};
export default ListNoteScreen;
