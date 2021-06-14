import React from 'react';
import {View} from 'react-native';
import {EpisodeCardPlaceHolder} from './index';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const EpisodeListPlaceHolder = () => {
  return (
    <View style={{marginLeft: 10}}>
      <ShimmerPlaceholder height={30} />

      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
      <View style={{marginTop: 30}}>
        <EpisodeCardPlaceHolder />
      </View>
    </View>
  );
};

export default EpisodeListPlaceHolder;
