import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, SafeAreaView} from 'react-native';
import {CharactersWidget, EpisodeList} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMainEpisodes} from '../../store/episode/actions';
import {fetchMainCharacters} from '../../store/character/actions';
import styles from './styles';

const Home = ({navigation}) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const episodeReducer = useSelector(state => state.EpisodeReducer);
  const characterReducer = useSelector(state => state.CharacterReducer);

  useEffect(() => {
    mainEpisodes(page);
    mainCharacters();
    console.log(characterReducer);
  }, [page]);

  const goToDetail = () => {
    navigation.push('Episode');
  };

  const mainEpisodes = page => {
    dispatch(fetchMainEpisodes(page));
  };

  const mainCharacters = () => {
    dispatch(fetchMainCharacters());
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Rick & Morty</Text>
      </SafeAreaView>
      <ScrollView>
        {!characterReducer.mainCharactersLoading &&
        characterReducer.mainCharacters ? (
          <CharactersWidget characters={characterReducer.mainCharacters} />
        ) : (
          <Text>Yükleniyor</Text>
        )}

        <View style={{marginTop: 40, paddingHorizontal: 10}}>
          {!episodeReducer.mainEpisodeLoading && episodeReducer.mainEpisode ? (
            <EpisodeList
              totalEpisode={episodeReducer.mainEpisode.info.count}
              episodes={episodeReducer.mainEpisode.results}
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
