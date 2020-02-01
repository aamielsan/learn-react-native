import React, { Component } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';


const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerStyle: {
    margin: 5,
  }
};


class Spinner extends Component {
  render() {
    const { size = 'large', visible = false, style = {} } = this.props;
    const { containerStyle, spinnerStyle } = styles;

    if (!visible) {
      return null;
    }

    return (
      <View style={spinnerStyle}>
        <ActivityIndicator
          size={size}
          style={[spinnerStyle, style]}
        />
      </View>
    );
  }
}


export default Spinner;
