import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {getCharacterId, getAvatarUri} from '../../utils/Globals';

const EpisodeCard = ({onPress, title, air_date, episode, characters}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginBottom: 12,
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          marginBottom: 12,
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: 13, fontWeight: '200'}}>{air_date}</Text>
      </View>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>#{episode}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          position: 'relative',
          top: -15,
        }}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 90,
            marginRight: -10,
            zIndex: 3,
          }}
          source={{
            uri: getAvatarUri(getCharacterId(characters[0])),
          }}
        />
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 90,
            marginRight: -10,
            zIndex: 2,
          }}
          source={{
            uri: getAvatarUri(getCharacterId(characters[1])),
          }}
        />
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 90,
            zIndex: 1,
          }}
          source={{
            uri: getAvatarUri(getCharacterId(characters[2])),
          }}
        />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 90,
            borderColor: 'lightgray',
            backgroundColor: 'lightgray',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
            + {characters.length - 3}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
