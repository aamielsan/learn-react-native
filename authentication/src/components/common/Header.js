import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Header extends Component {
  render() {
    const { viewStyle, textStyle } = styles;
    const { value = '' } = this.props;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{value}</Text>
      </View>
    );
  }
}


const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#01579b',
    elevation: 2,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  textStyle: {
    fontSize: 20,
    color: '#ffffff'
  }
};


export default Header;
