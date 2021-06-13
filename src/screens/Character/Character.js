import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {Avatar, DataWrapper} from '../../components/_core';
import {EpisodeWidget} from '../../components';
import {fetchDetailCharacter} from '../../store/character/actions';
import {getAvatarUri} from '../../utils/Globals';

const Character = ({route, navigation}) => {
  const {characterId} = route.params;
  const dispatch = useDispatch();
  const characterReducer = useSelector(state => state.CharacterReducer);

  navigation.setOptions({title: ''});
  useEffect(() => {
    dispatch(fetchDetailCharacter(characterId));
  }, [characterId]);

  return (
    <View style={styles.container}>
      {!characterReducer.detailCharacterLoading &&
      characterReducer.detailCharacter ? (
        <View>
          <View
            style={{
              marginTop: 90,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar uri={getAvatarUri(characterId)} />
            <Text style={styles.title}>
              {characterReducer.detailCharacter.name}
            </Text>
          </View>
          <View style={styles.dateWrapper}>
            <DataWrapper
              name={'Status'}
              value={characterReducer.detailCharacter.status}
            />
            <DataWrapper
              name={'Species'}
              value={characterReducer.detailCharacter.species}
            />
            <DataWrapper
              name={'Gender'}
              value={characterReducer.detailCharacter.gender}
            />
            <DataWrapper
              name={'Origin'}
              value={characterReducer.detailCharacter.origin.name}
            />
            <DataWrapper
              name={'Location'}
              value={characterReducer.detailCharacter.location.name}
            />
          </View>
          <Text style={styles.title}>Episodes</Text>
          <ScrollView
            style={{marginTop: 20, paddingHorizontal: 20, paddingBottom: 200}}>
            <EpisodeWidget
              episodes={characterReducer.detailCharacter.episode}
            />
          </ScrollView>
        </View>
      ) : (
        <Text>Yükleniyor</Text>
      )}
    </View>
  );
};

export default Character;
