import React, { Component } from 'react';
import firebase from 'firebase';
import {
  View,
  Text
} from 'react-native';

import {
  Button
} from './common';


const styles = {
  containerStyle: {
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
  },
  textContainerStyle: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  buttonContainerStyle: {
    marginTop: 20,
    flexDirection: 'row',
  },
}


class LogoutForm extends Component {
  _handleLogOutPress() {
    firebase.auth().signOut();
  }

  render() {
    const { textStyle, containerStyle, textContainerStyle, buttonContainerStyle } = styles;
    const { user } = this.props;
    const { email = "" } = user || {};

    return (
      <View style={containerStyle}>
        <View style={textContainerStyle}>
          <Text style={textStyle}>Email:</Text>
          <Text style={textStyle}>{email}</Text>
        </View>
        <View style={buttonContainerStyle}>
          <Button onPress={this._handleLogOutPress}>Log out</Button>
        </View>
      </View>
    );
  }
}


export default LogoutForm;
