import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import FacebookButton from './components/FacebookButton';
import login, { getPictureUrl } from './helper/facebook';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://laoblogger.com/images/default-profile-picture-5.jpg'
    };
  }

  getProfilePicture = () => {
    const url = getPictureUrl();
    fetch(url).then(response => {
      const { url } = response;

      this.setState({
        url
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelGyro}>Gyroscope Sensor 123456</Text>
        <FacebookButton action={login}/>
        <TouchableOpacity onPress={this.getProfilePicture}>
          <Text style={{fontSize: 24}}>View Profile Image</Text>
        </TouchableOpacity>
        <Image
          style={{width: 50, height: 50}}
          source={{ uri: this.state.url }}
        />
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
