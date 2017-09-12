/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
//import * as Animatable from 'react-native-animatable';
import Splash from './Splash';
import SignIn from './SignIn';
import Register from './Register';
import Instructions from './Instructions';
import TakePhoto from './TakePhoto';
import CameraScreen from './CameraScreen';
import ViewImage from './ViewImage';


export default class Foto_Lingo extends Component {

  configureScene() {
    return Navigator.SceneConfigs.FadeAndroid;
  }


  renderScene(route, navigator) {
    if (route.id === 1) {
      return <Splash navigator={navigator} />
    }
    else if (route.id === 2) {
     return <SignIn navigator={navigator} />
    }
    else if (route.id === 3) {
      return <Register navigator={navigator} />
    }
    else if (route.id === 4) {
      return <Instructions navigator={navigator} />
    }
    else if (route.id === 5) {
      return <TakePhoto navigator={navigator} />
    }
    else if (route.id === 6) {
      return <CameraScreen navigator={navigator} />
    }
    else if (route.id === 7) {
      return <View navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 1 }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}


AppRegistry.registerComponent('Foto_Lingo', () => Foto_Lingo);
