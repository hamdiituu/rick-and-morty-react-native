import React from 'react';
import {View} from 'react-native';
import {Avatar} from './_core';
import {getAvatarUri, getCharacterId} from '../utils/Globals';

const CharacterList = ({onPress, characters}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}>
      {characters.map((character, index) => (
        <View key={index} style={{margin: 5}}>
          <Avatar
            onPress={() => onPress(getCharacterId(character))}
            uri={getAvatarUri(getCharacterId(character))}
          />
        </View>
      ))}
    </View>
  );
};
export default CharacterList;
