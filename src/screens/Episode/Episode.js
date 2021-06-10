import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {DataWrapper, Avatar} from '../../components/_core';

import styles from './styles';
import {CharacterList} from '../../components';
const Episode = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: '#E01S01'});
  });
  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginTop: 80}}>
        <Text style={styles.title}>Pilot</Text>
      </SafeAreaView>
      <View style={styles.dateWrapper}>
        <DataWrapper name={'Air Date'} value={'March 17, 2014'} />
        <DataWrapper name={'Season'} value={'01'} />
        <DataWrapper name={'Episode'} value={'01'} />
      </View>
      <Text style={styles.title}>Characters</Text>
      <ScrollView style={{marginTop: 20, paddingHorizontal: 5}}>
        <CharacterList />
      </ScrollView>
    </View>
  );
};

export default Episode;
