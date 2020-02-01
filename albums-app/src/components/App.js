import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from './common';
import AlbumList from './album_list/AlbumList';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header value={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  }
}


export default App;
