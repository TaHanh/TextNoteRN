/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import styles from './NoteDetailStyle';

const NoteDetailScreen = () => {
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
          <View style={styles.containerList} key={{index}}>
            <Text style={styles.titleList}>{item.key}</Text>
            <View>
            <Text style={styles.titleList}>{item.key}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default NoteDetailScreen;
