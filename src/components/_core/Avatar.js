import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

const Avatar = ({onPress = null, uri, style = {width: 80, height: 80}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{
          width: style.width,
          height: style.height,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: 'lightgrey',
        }}
        source={{
          uri: uri,
        }}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
