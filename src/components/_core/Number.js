import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Number = ({
  number,
  onPress = null,
  width = 40,
  height = 40,
  fontSize = 24,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: height,
        width: width,
        borderRadius: 90,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        margin: 2,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: fontSize}}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};
export default Number;
