import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

const Avatar = ({uri}) => {
  return (
    <TouchableOpacity style={{marginRight: 10}}>
      <Image
        style={{
          width: 60,
          height: 60,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: 'lightgrey',
          marginLeft: 10,
        }}
        source={{
          uri: uri,
        }}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
