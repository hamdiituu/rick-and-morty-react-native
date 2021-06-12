import React, {useEffect} from 'react';
import {ScrollView, View, Text, SafeAreaView} from 'react-native';
import {CharactersWidget, EpisodeList} from '../../components';

import styles from './styles';

const Home = ({navigation}) => {
  const goToDetail = () => {
    navigation.push('Episode');
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Rick & Morty</Text>
      </SafeAreaView>
      <ScrollView>
        <CharactersWidget />
        <View style={{marginTop: 40, paddingHorizontal: 10}}>
          <EpisodeList onPress={goToDetail} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
