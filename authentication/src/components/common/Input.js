import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';


class Input extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value) {
    const { name, onChangeText } = this.props;
    onChangeText
      && onChangeText({ name, value });
  }

  render() {
    const { label, ...restProps } = this.props;
    const { inputContainerStyle, labelStyle, inputStyle } = styles;

    return (
      <View style={inputContainerStyle}>
        {label &&
          <Text style={labelStyle}>{label}</Text>
        }
        <TextInput
          {...restProps}

          style={inputStyle}
          underlineColorAndroid="transparent"
          onChangeText={this.handleOnChange}
        />
      </View>
    );
  }
}


const styles = {
  inputContainerStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    margin: 5
  },
  labelStyle: {
    marginBottom: 5,
    color: "#424242"
  },
  inputStyle: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#e0e0e0",
    backgroundColor: "#f5f5f5",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
};


export default Input;
