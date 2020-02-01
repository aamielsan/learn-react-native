import React, { Component } from 'react';
import {
  Header as BaseHeader,
  Body,
  Title
} from 'native-base';


class Header extends Component {
  render() {
    const { value = '' } = this.props;
    return (
      <BaseHeader>
        <Body style={styles.bodyStyle}>
          <Title>{value}</Title>
        </Body>
      </BaseHeader>
    );
  }
}


const styles = {
  bodyStyle: {
    alignItems: 'center'
  }
};


export default Header;
