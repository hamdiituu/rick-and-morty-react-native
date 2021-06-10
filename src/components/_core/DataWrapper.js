import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const DataWrapper = ({name, value}) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 22,
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 15,
    fontWeight: '300',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default DataWrapper;
