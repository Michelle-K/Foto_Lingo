import React, { Component } from 'react';
import {  View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Camera from '../assets/images/camera.png';


class ViewImage extends Component {


  nextPage() {
    this.props.navigator.push({
      id: 8
    });
  }

  render() {
    return (
    <View style={styles.outterContainer}>
      <Image
  source={{uri: imageURI, isStatic:true}}
  style={{width: 100, height: 100}}
  />
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
  }
};

export default ViewImage;
