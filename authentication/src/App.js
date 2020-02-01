import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';


const styles = {
  containerStyle: {
    flexDirection: 'column',
    flex: 1,
  },
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null
    };

    this._handleAuthStateChange = this._handleAuthStateChange.bind(this);
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDq8hPq0975ayuiIjF-SXjXGjbDGLvKprk",
      authDomain: "react-native-auth-e5a09.firebaseapp.com",
      databaseURL: "https://react-native-auth-e5a09.firebaseio.com",
      projectId: "react-native-auth-e5a09",
      storageBucket: "react-native-auth-e5a09.appspot.com",
      messagingSenderId: "520481023157"
    };

    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(this._handleAuthStateChange);
  }

  _handleAuthStateChange(user) {
    this.setState({
      user: user || null,
      loggedIn: Boolean(user)
    });
  }

  _renderContent() {
    const { loggedIn, user } = this.state;

    switch (loggedIn) {
      case true:
        return <LogoutForm user={user} />

      case false:
        return <LoginForm />

      default:
        return <Spinner visible={true} />
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header value="Authentication" />
        {this._renderContent()}
      </View>
    );
  }
}


export default App;
