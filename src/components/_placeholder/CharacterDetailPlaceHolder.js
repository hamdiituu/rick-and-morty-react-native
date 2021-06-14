import React from 'react';
import {View} from 'react-native';
import {AvatarPlaceHolder, EpisodeCardPlaceHolder} from './index';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const CharacterDetailPlaceHolder = () => {
  return (
    <View style={{marginLeft: 10}}>
      <View
        style={{
          marginTop: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AvatarPlaceHolder width={90} height={90} />
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

export default CharacterDetailPlaceHolder;
