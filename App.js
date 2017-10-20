import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GyroscopeSensor from './components/Gyroscope';
import ImagePickerTest from './components/ImagePicker';
import FacebookButton from './components/FacebookButton';
import login from './helper/facebook';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelGyro}>Gyroscope Sensor</Text>
        <GyroscopeSensor />
        <Text style={styles.labelImage}>Image Picker</Text>
        <ImagePickerTest />
        <FacebookButton action={login}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelGyro: {
    fontSize: 24,
    color: '#05668D',
    marginTop: 30
  },
  labelImage: {
    fontSize: 24,
    color: '#05668D',
    marginTop: 30
  }
});
