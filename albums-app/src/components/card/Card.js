import React, { Component } from 'react';
import { View } from 'react-native';


class Card extends Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.cardContainer}>
        {children}
      </View>
    );
  }
}


const styles = {
  cardContainer: {
    borderWidth: 1,       // Border thickness
    borderRadius: 2,      // Rounding of the border in the corner
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,   // Transparency of shadow
    shadowRadius: 2,      // Rounding of the corners, matches the border radius
    shadowOffset: {       // Shadow offset on the bottom
      width: 0,
      height: 2
    },
    elevation: 1,         // Card elevation
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15
  }
}


export default Card;
