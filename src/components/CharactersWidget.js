import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';

const CharactersWidget = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 20}}
      horizontal={true}>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginLeft: 10,
          }}
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: 'lightgrey',
          }}
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: 'lightgrey',
          }}
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: 'lightgrey',
          }}
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: 'lightgrey',
          }}
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: 'lightgrey',
          }}
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: 'lightgrey',
          }}
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginRight: 10,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 90,
          borderColor: 'lightgrey',
          backgroundColor: 'lightgrey',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          +30
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CharactersWidget;
