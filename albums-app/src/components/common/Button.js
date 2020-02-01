import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';


class Button extends Component {
  render() {
    const { children, onPress } = this.props;
    const { button, label } = styles;

    return (
      <TouchableOpacity
        style={button}
        onPress={onPress}
      >
        <Text style={label}>{children}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = {
  label: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#01579b'
  }
};


export default Button;
