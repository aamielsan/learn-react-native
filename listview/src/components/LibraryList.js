import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
} from 'native-base';

import { getLibraryList } from '../selectors/selectors_library';
import LibraryListItem from './LibraryListItem';


class LibraryList extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(data) {
    return <LibraryListItem data={data} />
  }

  render() {
    const { list } = this.props;

    return (
      <List
        dataArray={list}
        renderRow={this.renderRow}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    list: getLibraryList(state)
  }
}


export default connect(mapStateToProps)(LibraryList);

