import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Number = ({number, onPress = null}) => {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        borderRadius: 90,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        margin: 2,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{number}</Text>
    </TouchableOpacity>
  );
};
export default Number;
