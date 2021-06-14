import React from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Number} from './_core';
import {getAvatarUri} from '../utils/Globals';
import {CharactersWidgetPlaceHolder} from './_placeholder';

const CharactersWidget = ({characters = null, goToDetail = null}) => {
  if (characters) {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 20}}
        horizontal={true}>
        {characters.results.map((character, index) => (
          <View
            key={character.id}
            style={
              index === 0
                ? {paddingLeft: 10, marginRight: 10}
                : {marginRight: 10}
            }>
            <Avatar
              onPress={() => goToDetail(character.id)}
              name={character.name}
              uri={getAvatarUri(character.id)}
              width={60}
              height={60}
            />
          </View>
        ))}
        <Number
          fontSize={15}
          width={60}
          height={60}
          number={'+' + (characters.info.count - characters.results.length)}
        />
      </ScrollView>
    );
  } else {
    return <CharactersWidgetPlaceHolder />;
  }
};

export default CharactersWidget;
