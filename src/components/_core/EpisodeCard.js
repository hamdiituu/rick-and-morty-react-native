import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const EpisodeCard = ({onPress, title, air_date, episode}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 12,
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>

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
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
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
            uri: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
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
            uri: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
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
            +30
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
