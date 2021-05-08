import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ExampleButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ExampleButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3292B1',
    padding: 12,
    borderRadius: 12,
    width: '100%',
    marginVertical: 12,
  },
  text: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
  },
});
