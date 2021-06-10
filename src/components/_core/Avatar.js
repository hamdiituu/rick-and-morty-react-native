import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

const Avatar = ({uri, style = {width: 80, height: 80}}) => {
  return (
    <TouchableOpacity>
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
