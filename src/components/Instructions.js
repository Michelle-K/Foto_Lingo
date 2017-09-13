import React, { Component } from 'react';
import { View, Dimensions, Text, Image, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Logo from '../assets/images/fotoLingoLogoW.png';
import Forward from '../assets/images/forward.png';
import Icon from 'react-native-vector-icons/FontAwesome';

class Instructions extends Component {

  nextPageTakePhoto() {
    this.props.navigator.push({
      id: 5
    });
  }

  render() {
    return (
<View style={styles.outterContainer}>

    <View style={styles.logoBox}>
      <Animatable.Image
        source={Logo}
        animation="pulse" easing="ease-out" iterationCount="infinite"
        style={styles.logo}
      />
    </View>
    <Animatable.View
      animation="slideInUp" duration={3000} interationCount={1}
      style={styles.textBox}
    >
      <Text style={styles.header}>INSTRUCTIONS</Text>
      <Icon name="camera-retro" size={30} color="white" /><Text style={styles.instructions}>Take a photo</Text>
      <Icon name="list" size={30} color="white" /><Text style={styles.instructions}>Pick a word</Text>
      <Icon name="comment" size={30} color="white" /><Text style={styles.instructions}>See and hear it in spanish</Text>
      <Icon name="certificate" size={30} color="white" /><Text style={styles.instructions}>See your collected words</Text>

      <TouchableHighlight onPress={() => this.nextPageTakePhoto()}>
        <Image source={Forward} style={{ height: 40, width: 40 }} />
      </TouchableHighlight>
    </Animatable.View>
  </View>
    );
  }
}

const screenWidth = Dimensions.get('window').width;

const styles = {
  outterContainer: {
    flex: 1,
    backgroundColor: '#282828',
  },
  logoBox: {
    flex: 1,
    justifyContent: 'center'
    //backgroundColor: 'white'
  },
  logo: {
    height: 150,
    width: 145,
    position: 'absolute',
    left: ((screenWidth / 2) - 72.5),
    top: 50
    //fontFamily: 'alphabetized cassette tapes'
  },
  textBox: {
    alignItems: 'center',
    flex: 2,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontFamily: 'alphabetized cassette tapes',
    color: 'white',
    fontSize: 50
  },
  instructions: {
    fontFamily: 'alphabetized cassette tapes',
    color: 'white',
    fontSize: 30
  }
};

export default Instructions;
