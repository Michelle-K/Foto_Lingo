import React, { Component } from 'react';
import { View, TouchableHighlight, Image, Text, TextInput, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SignInButton from '../assets/images/SignIn.png';
import RegisterButton from '../assets/images/register2.png';
import Logo from '../assets/images/fotoLingoLogoW.png';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  nextPageSignIn() {
    this.props.navigator.push({
      id: 4
    });
  }

  nextPageRegister() {
    this.props.navigator.push({
      id: 3
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

    <View style={styles.loginContainer}>

          <View style={styles.signInBox}>
            <Text style={styles.loginText}>Username:</Text>
            <TextInput
                autofocus
                style={styles.loginInput}
                onChangeText={(text) => this.setState({ username: text })}
            />
          </View>
          <View style={styles.signInBox}>
            <Text style={styles.loginText}>Password:</Text>
            <TextInput
                autofocus
                style={styles.passwordInput}
                password={true}
            />
          </View>
          <View style={styles.signInBox}>
            <TouchableHighlight style={styles.buttonStyle} onPress={() => this.nextPageSignIn()}>
              <Text style={styles.textStyle}>Sign In</Text>
            </TouchableHighlight>
          </View>

    </View>

    <View style={styles.registerBox}>
      <Text style={{ fontFamily: 'alphabetized cassette tapes', fontSize: 30, textAlign: 'center', color: 'white' }}>Dont have an account? Click to register. </Text>
      <TouchableHighlight style={styles.button} onPress={this.nextPageRegister}>
        <Image style={{ height: 87, width: 300 }} source={RegisterButton} />
      </TouchableHighlight>

    </View>
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
  loginContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#282828',
    justifyContent: 'space-around',
    //flexDirection: 'row',
    borderColor: '#ddd',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    flex: 2
  },
  logoBox: {
    flex: 3,
    justifyContent: 'center'
    //backgroundColor: 'white'
  },
  logo: {
    height: 150,
    width: 145,
    position: 'absolute',
    left: (screenWidth / 2 - 72.5),
    top: 50
    //fontFamily: 'alphabetized cassette tapes'
  },
  signInBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginInput: {
    height: 40,
    fontFamily: 'alphabetized cassette tapes',
    margin: 10,
    width: (screenWidth / 2),
    alignItems: 'center',
    paddingLeft: 10,
    fontSize: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white'
  },
   registerBox: {
     justifyContent: 'flex-end',
     flex: 2
  },
  button: {
    paddingBottom: 60,
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'alphabetized cassette tapes',
    fontSize: 40,
    width: 150,
    textAlign: 'center',
    color: 'white'

  },
  passwordInput: {
    height: 40,
    fontFamily: 'alphabetized cassette tapes',
    margin: 10,
    width: (screenWidth / 2),
    alignItems: 'center',
    paddingLeft: 10,
    fontSize: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white'
  },
  textStyle: {
    alignSelf: 'center',
    fontFamily: 'alphabetized cassette tapes',
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    //backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  }
};

export default SignIn;
