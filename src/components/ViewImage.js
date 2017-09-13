import React, { Component } from 'react';
import { Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Logo from '../assets/images/fotoLingoLogoW.png';
import BGgif from '../assets/images/circleSplash.gif';

class ViewImage extends Component {
  componentDidMount() {
    setTimeout(() => this.nextPage(), 5000);
  }

  nextPage() {
    this.props.navigator.push({
      id: 2
    });
  }

  render() {
    return (
    <Image source={BGgif} style={styles.outterContainer}>
      <Animatable.Image
        source={Logo}
        animation="zoomIn" style={styles.logo}
      />
    </Image>
    );
  }
}

const styles = {
  outterContainer: {
    flex: 1,
    backgroundColor: '#DEDBD2',
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

export default ViewImage;
