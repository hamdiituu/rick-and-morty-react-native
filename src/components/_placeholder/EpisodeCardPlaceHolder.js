import React from 'react';
import {View} from 'react-native';

import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const EpisodeCardPlaceHolder = () => {
  return (
    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <ShimmerPlaceholder height={20} />
        <ShimmerPlaceholder width={100} height={20} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <ShimmerPlaceholder height={20} />
        <ShimmerPlaceholder width={100} height={20} />
      </View>
    </View>
  );
};

export default EpisodeCardPlaceHolder;
