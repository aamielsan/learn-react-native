import React, { Component } from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';

import {
  Header
} from './common'


class App extends Component {
  render() {
    return (
      <Container>
        <Header value="Manager" />
        <Content>
          <Text>Hi world</Text>
        </Content>
      </Container>
    );
  }
}


export default App;
