import React, { Component } from 'react';
import { Image, View, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Camera from '../assets/images/camera.png';


class TakePhoto extends Component {


  nextPage() {
    this.props.navigator.push({
      id: 6
    });
  }

  render() {
    return (
    <View style={styles.outterContainer}>
      <TouchableHighlight onPress={() => this.nextPage()}>
        <Animatable.Image
          source={Camera}
          animation="zoomIn" style={styles.logo}
        />
      </TouchableHighlight>

    </View>
    );
  }
}

const styles = {
  outterContainer: {
    flex: 1,
    backgroundColor: '#282828',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  logo: {
    height: 200,
    width: 200
  }
};

export default TakePhoto;
