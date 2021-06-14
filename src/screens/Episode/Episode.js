import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {DataWrapper} from '../../components/_core';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {CharacterList} from '../../components';
import {fetchDetailEpisode} from '../../store/episode/actions';
import {parsSE} from '../../utils/Globals';

const Episode = ({route, navigation}) => {
  const {episodeTitle, episodeId} = route.params;

  const episodeReducer = useSelector(state => state.EpisodeReducer);
  const dispatch = useDispatch();

  navigation.setOptions({
    title: episodeTitle
      ? `#${episodeTitle}`
      : episodeReducer.detailEpisode.episode,
  });

  useEffect(() => {
    dispatch(fetchDetailEpisode(episodeId));
  }, [episodeId]);

  const goToCharacterDetail = id => {
    navigation.push('Character', {characterId: id});
  };
  return (
    <ScrollView style={styles.container}>
      {!episodeReducer.detailEpisodeLoading && episodeReducer.detailEpisode ? (
        <View>
          <SafeAreaView style={{marginTop: 80}}>
            <Text style={styles.title}>
              {episodeReducer.detailEpisode.name}
            </Text>
          </SafeAreaView>
          <View style={styles.dateWrapper}>
            <DataWrapper
              name={'Air Date'}
              value={episodeReducer.detailEpisode.air_date}
            />
            <DataWrapper
              name={'Season'}
              value={parsSE(episodeReducer.detailEpisode.episode)[0]}
            />
            <DataWrapper
              name={'Episode'}
              value={parsSE(episodeReducer.detailEpisode.episode)[1]}
            />
          </View>
          <Text style={styles.title}>Characters</Text>
          <ScrollView style={{marginTop: 20, paddingHorizontal: 5}}>
            <CharacterList
              characters={episodeReducer.detailEpisode.characters}
              onPress={goToCharacterDetail}
            />
          </ScrollView>
        </View>
      ) : (
        <Text>Yükleniyor</Text>
      )}
    </ScrollView>
  );
};

export default Episode;
