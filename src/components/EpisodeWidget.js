import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Number} from './_core';
import {getEpisodeCount} from '../utils/Globals';

const EpisodeWidget = ({episodes, onPress}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {episodes.map((episode, index) => (
        <Number key={index} number={getEpisodeCount(episode)} />
      ))}
    </View>
  );
};
export default EpisodeWidget;
