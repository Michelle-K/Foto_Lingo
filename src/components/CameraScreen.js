'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Alert
} from 'react-native';
import Camera from 'react-native-camera';
import Logo from '../assets/images/fotoLingoLogoW.png';

class CameraScreen extends Component {
  state = { photoTaken: false, photoData: '' };

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
      this.setState({ photoTaken: true });
      //this.props.navigator.push({
        //id: 7
      //});
  }

  render() {
    if (!this.state.photoTaken) {
      return (
        <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            captureTarget={Camera.constants.CaptureTarget.disk}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
          >
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          </Camera>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Image source={Logo} />
      </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default CameraScreen;
