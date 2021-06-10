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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: '300',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default DataWrapper;
