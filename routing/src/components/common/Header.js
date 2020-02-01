import React, { Component } from 'react';
import {
  Header as BaseHeader,
  Left,
  Right,
  Body,
  Title
} from 'native-base';


class Header extends Component {
  render() {
    const { value } = this.props;

    return (
      <BaseHeader>
        <Left />
        <Body style={styles.bodyStyle}>
          <Title>{value}</Title>
        </Body>
        <Right />
      </BaseHeader>
    );
  }
}


const styles = {
  bodyStyle: {
    alignItems: 'center',
  },
};


export default Header;
