import React from 'react';
import {View} from 'react-native';
import {AvatarPlaceHolder, EpisodeCardPlaceHolder} from './index';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const EpisodeDetailPlaceHolder = () => {
  return (
    <View style={{marginLeft: 10}}>
      <View style={{marginTop: 30, marginTop: 85}}>
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
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 30}}>
        <View style={{margin: 10}}>
          <AvatarPlaceHolder textPlace={false} width={90} height={90} />
        </View>
        <View style={{margin: 10}}>
          <AvatarPlaceHolder textPlace={false} width={90} height={90} />
        </View>
        <View style={{margin: 10}}>
          <AvatarPlaceHolder textPlace={false} width={90} height={90} />
        </View>
        <View style={{margin: 10}}>
          <AvatarPlaceHolder textPlace={false} width={90} height={90} />
        </View>
        <View style={{margin: 10}}>
          <AvatarPlaceHolder textPlace={false} width={90} height={90} />
        </View>
      </View>
    </View>
  );
};

export default EpisodeDetailPlaceHolder;
