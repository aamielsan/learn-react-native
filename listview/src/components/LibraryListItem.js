import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ListItem,
  Text,
  Body,
} from 'native-base';

import { selectLibrary } from '../actions';
import { getSelectedLibrary } from '../selectors';


class LibraryListItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    const { data, selectLibrary } = this.props;
    const { id } = data || {};
    selectLibrary(id);
  }

  renderDescription() {
    const { data, expanded } = this.props;
    const { description = "" } = data || {};

    if (!expanded) {
      return null;
    }

    return (
      <Text note>
        {description}
      </Text>
    );
  }

  render() {
    const { data } = this.props;
    const { title = "" } = data || {};

    return (
      <ListItem
        button={true}
        onPress={this.handleOnPress}
      >
        <Body>
          <Text>{title}</Text>
          {this.renderDescription()}
        </Body>
      </ListItem>
    );
  }
}


function mapStateToProps(state, { data }) {
  const selectedId = getSelectedLibrary(state);
  const { id: libraryId } = data || {}

  return {
    expanded: selectedId === libraryId
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectLibrary
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LibraryListItem);
