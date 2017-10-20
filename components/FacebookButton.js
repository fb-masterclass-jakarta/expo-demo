import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const FacebookButton = ({ action }) => (
  <TouchableOpacity style={styles.button} onPress={action}>
    <Text style={styles.text}>Login with Facebook</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24
  },
  button: {
    height: 48,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    backgroundColor: '#3f51b5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    marginLeft: 12.5,
    width: 208,
    height: 19,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.44,
    textAlign: 'center',
    color: '#fff'
  }
});

export default FacebookButton;
