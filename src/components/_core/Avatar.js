import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

const Avatar = ({onPress = null, uri, name, width = 80, height = 80}) => {
  return (
    <TouchableOpacity style={{width: width}} onPress={onPress}>
      <Image
        style={{
          width: width,
          height: height,
          borderRadius: 90,
          borderWidth: 1,
          borderColor: 'lightgrey',
        }}
        source={{
          uri: uri,
        }}
      />
      <Text style={{textAlign: 'center', marginTop: 5, fontWeight: '200'}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Avatar;
