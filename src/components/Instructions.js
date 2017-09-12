import React, { Component } from 'react';
import { View, Dimensions, Text, Image, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Logo from '../assets/images/fotoLingoLogoW.png';
import Forward from '../assets/images/forward.png';

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
      <Text style={styles.instructions}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat, magna ac finibus euismod, dolor ex ultricies velit, cursus commodo velit arcu ut ipsum. Nunc est dolor, tempor vitae leo eget, tempor lacinia velit. Ut tristique sapien at nunc sollicitudin commodo. Donec eu nisl ligula. Pellentesque at nisi id eros hendrerit gravida nec semper diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam semper finibus tellus, ut euismod purus pretium ornare.
      </Text>
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
