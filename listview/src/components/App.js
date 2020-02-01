import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Container,
  Content,
} from 'native-base';

import {
  Header
} from './common';
import LibraryList from './LibraryList';
import configureStore from '../store';


class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Container>
          <Header value="Tech Stack" />
          <Content>
            <LibraryList />
          </Content>
        </Container>
      </Provider>
    );
  }
}


export default App;
