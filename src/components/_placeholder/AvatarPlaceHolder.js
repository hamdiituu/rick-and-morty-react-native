import React from 'react';
import {View, Animated} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const AvatarPlaceHolder = ({textPlace = true, width = 60, height = 60}) => {
  return (
    <View>
      <ShimmerPlaceholder
        width={width}
        height={height}
        shimmerStyle={{borderRadius: 90}}
      />
      {textPlace && (
        <View>
          <ShimmerPlaceholder
            width={width}
            shimmerStyle={{marginTop: 5}}
            height={10}
          />
          <ShimmerPlaceholder
            width={width}
            shimmerStyle={{marginTop: 5}}
            height={10}
          />
        </View>
      )}
    </View>
  );
};
export default AvatarPlaceHolder;
