import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  CameraRoll,
  Image,
  Dimensions,
  RefreshControl
} from 'react-native'

let styles
const { width } = Dimensions.get('window')

class App extends React.Component {
  
  state = {
    photos: []
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }
  
  render() {
    console.log('state :', this.state)
    return (
      <View style={styles.container}>
        {this.state.photos.map((p, i) => {
          return (
            <Image
              style={{
                width: width/3,
                height: width/3
              }}
                source={{uri: p.node.image.uri}}
            />
          )
        })}  
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App