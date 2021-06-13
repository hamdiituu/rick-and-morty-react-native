import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, SafeAreaView} from 'react-native';
import {CharactersWidget, EpisodeList} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMainEpisodes} from '../../store/episode/actions';
import {fetchMainCharacters} from '../../store/character/actions';
import styles from './styles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const episodeReducer = useSelector(state => state.EpisodeReducer);
  const characterReducer = useSelector(state => state.CharacterReducer);

  useEffect(() => {
    dispatch(fetchMainEpisodes());
    dispatch(fetchMainCharacters());
  }, []);

  const goToCharacterDetail = id => {
    navigation.push('Character', {characterId: id});
  };

  const goToEpisodeDetail = (id, title = null) => {
    navigation.push('Episode', {episodeId: id, episodeTitle: title});
  };

  const addEpisode = () => {
    console.log('add scroll');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Rick & Morty</Text>
      </SafeAreaView>
      <ScrollView>
        {!characterReducer.mainCharactersLoading &&
        characterReducer.mainCharacters ? (
          <CharactersWidget
            characters={characterReducer.mainCharacters}
            goToDetail={goToCharacterDetail}
          />
        ) : (
          <Text>Yükleniyor</Text>
        )}

        <View style={{marginTop: 40, paddingHorizontal: 10}}>
          {!episodeReducer.mainEpisodeLoading && episodeReducer.mainEpisode ? (
            <EpisodeList
              totalEpisode={episodeReducer.mainEpisode.info.count}
              episodes={episodeReducer.mainEpisode.results}
              onPress={goToEpisodeDetail}
            />
          ) : (
            <Text>Yükleniyor</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
