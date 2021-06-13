import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, SafeAreaView} from 'react-native';
import {CharactersWidget, EpisodeList} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllEpisode} from '../../store/episode/actions';
import styles from './styles';

const Home = ({navigation}) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const episodeReducer = useSelector(state => state.EpisodeReducer);

  useEffect(() => {
    dispatch(fetchAllEpisode(page));
    console.log(episodeReducer);
  }, []);

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
          {!episodeReducer.fetchAllEpisodeLoading &&
          episodeReducer.fetchAllEpisode ? (
            <EpisodeList episodes={episodeReducer.fetchAllEpisode.results} />
          ) : (
            <Text>Yükleniyor</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
