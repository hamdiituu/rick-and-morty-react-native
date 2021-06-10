import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Number} from './_core';

const EpisodeWidget = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <Number number={1} />
      <Number number={2} />
      <Number number={3} />
      <Number number={4} />
      <Number number={5} />
      <Number number={6} />
      <Number number={7} />
      <Number number={8} />
      <Number number={9} />
      <Number number={10} />
      <Number number={11} />
      <Number number={12} />
      <Number number={13} />
      <Number number={14} />
      <Number number={15} />
    </View>
  );
};
export default EpisodeWidget;
