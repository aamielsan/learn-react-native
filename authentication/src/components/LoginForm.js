import React, { Component } from 'react';
import firebase from 'firebase';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import {
  Button,
  Card,
  CardSection,
  Input,
  SimpleModal,
  Spinner,
} from './common';


const styles = {
  indicatorStyle: {
    alignSelf: 'center',
    margin: 5,
  },
  messageTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    padding: 10,
  },
  successTextStyle: {
    color: 'green',
  },
  errorTextStyle: {
    color: 'red',
  }
}


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      isLoading: false,
      isSuccess: false,
      isError: false,
    };

    this.handleOnModalHide = this.handleOnModalHide.bind(this);
    this.handleOnLoginSuccess = this.handleOnLoginSuccess.bind(this);
    this.handleOnLoginError = this.handleOnLoginError.bind(this);
    this.handleOnLoginClick = this.handleOnLoginClick.bind(this);
    this.handleOnInputTextChange = this.handleOnInputTextChange.bind(this);
  }

  handleOnModalHide() {
    this.setState({
      message: '',
      isLoading: false,
      isSuccess: false,
      isError: false,
    });
  }

  handleOnLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      message: 'Login Success',
      isLoading: false,
      isSuccess: true,
      isError: false,
    });
  }

  handleOnLoginError({ message }) {
    this.setState({
      isLoading: false,
      isError: true,
      message: `Login failed. ${message}`
    });
  }

  handleOnLoginClick() {
    const { email, password } = this.state;

    // Reset any error on screen, and show loader
    this.setState({
      message: '',
      isLoading: true,
      isSuccess: false,
      isError: false,
    });

    // Start firebase authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.handleOnLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.handleOnLoginSuccess)
          .catch(this.handleOnLoginError);
      });
  }

  handleOnInputTextChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { isLoading, isSuccess, isError, message, email, password } = this.state;
    const { indicatorStyle, messageTextStyle, errorTextStyle, successTextStyle } = styles;

    return (
      <View>
        <SimpleModal
          visible={isLoading || isSuccess || isError}
          onHide={this.handleOnModalHide}
        >
          <Spinner
            visible={isLoading}
          />
          {isError && (
            <Text style={[messageTextStyle, errorTextStyle]}>
              {message}
            </Text>
          )}
          {isSuccess && (
            <Text style={[messageTextStyle, successTextStyle]}>
              {message}
            </Text>
          )}
        </SimpleModal>

        <Card>
          <CardSection>
            <Input
              label="Email"
              keyboardType="email-address"
              name="email"
              autoCorrect={false}
              value={email}
              onChangeText={this.handleOnInputTextChange}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              name="password"
              secureTextEntry={true}
              value={password}
              onChangeText={this.handleOnInputTextChange}
            />
          </CardSection>

          <CardSection>
            <Button
              onPress={this.handleOnLoginClick}
            >
              Login
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}


export default LoginForm;
