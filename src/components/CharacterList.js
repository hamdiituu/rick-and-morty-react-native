import React from 'react';
import {View} from 'react-native';
import {Avatar} from './_core';

const CharacterList = ({onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}>
      <View style={{margin: 5}}>
        <Avatar
          onPress={onPress}
          uri={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        />
      </View>
      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
        />
      </View>

      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
        />
      </View>

      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
        />
      </View>
      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/55.jpeg'}
        />
      </View>
      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/67.jpeg'}
        />
      </View>

      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/34.jpeg'}
        />
      </View>

      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/23.jpeg'}
        />
      </View>
      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/87.jpeg'}
        />
      </View>
      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/45.jpeg'}
        />
      </View>

      <View style={{margin: 5}}>
        <Avatar
          uri={'https://rickandmortyapi.com/api/character/avatar/65.jpeg'}
        />
      </View>
    </View>
  );
};
export default CharacterList;
