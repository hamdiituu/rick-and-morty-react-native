import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Number} from './_core';
import {getEpisodeCount} from '../utils/Globals';

const EpisodeWidget = ({episodes}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {episodes.map(episode => (
        <Number number={getEpisodeCount(episode)} />
      ))}
    </View>
  );
};
export default EpisodeWidget;
