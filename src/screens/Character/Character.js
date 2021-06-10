import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';
import {Avatar, DataWrapper} from '../../components/_core';
import {EpisodeWidget} from '../../components';
const Character = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: ''});
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 90,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        />
        <Text style={styles.title}>Rick Sanchez</Text>
      </View>
      <View style={styles.dateWrapper}>
        <DataWrapper name={'Status'} value={'Alive'} />
        <DataWrapper name={'Species'} value={'Human'} />
        <DataWrapper name={'Gender'} value={'Male'} />
        <DataWrapper name={'Origin'} value={'Earth (C-137)'} />
        <DataWrapper
          name={'Location'}
          value={'Earth (Replacement Dimension)'}
        />
      </View>
      <Text style={styles.title}>Episodes</Text>
      <ScrollView style={{marginTop: 20, paddingHorizontal: 20}}>
        <EpisodeWidget />
      </ScrollView>
    </View>
  );
};

export default Character;
