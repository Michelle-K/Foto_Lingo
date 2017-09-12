import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, TextInput, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SignInButton from '../assets/images/SignIn.png';
import RegisterButton from '../assets/images/register.png';
import Logo from '../assets/images/Logo.png';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  nextPage() {
    this.props.navigator.push({
      id: 4
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

    <View style={styles.loginBox}>
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
            style={styles.loginInput}
            password={true}
            onChangeText={(text) => this.setState({ password: text })}
        />
      </View>
      <Text style={{ fontFamily: 'alphabetized cassette tapes', fontSize: 20, textAlign: 'center' }}>Dont have an account? Click to register. </Text>
      <TouchableOpacity style={styles.button}>
        <Image style={{ height: 52.666, width: 180.666 }} source={RegisterButton} />
      </TouchableOpacity>
    </View>


  </View>
    );
  }
}

const screenWidth = Dimensions.get('window').width;

const styles = {
  outterContainer: {
    flex: 1,
    backgroundColor: '#DEDBD2',
    //flexDirection: 'column',
    //paddingTop: 20,
    //alignItems: 'center'
  },
  logoBox: {
    flex: 2,
    //backgroundColor: 'white'
  },
  logo: {
    height: 150,
    width: 145,
    position: 'absolute',
    left: (screenWidth / 2 - 72.5),
    top: 30
    //fontFamily: 'alphabetized cassette tapes'
  },
  loginBox: {
    flex: 2,
    //backgroundColor: 'purple'

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
    borderColor: 'black'
  },
   buttons: {
     justifyContent: 'center',
     //alignItems: 'center',
     flex: 2,
      flexDirection: 'column',
      //backgroundColor: 'green'
  },
  button: {
    paddingBottom: 60,
    alignItems: 'center',
    //justifyContent: 'flex-end',


  },
  loginText: {
    fontFamily: 'alphabetized cassette tapes',
    fontSize: 40,
    width: 150,
    textAlign: 'right',

  }
};

export default SignIn;
