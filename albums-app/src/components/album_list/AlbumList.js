import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';

import { getAllAlbums } from '../../actions';
import { getAlbumState } from '../../selectors';
import AlbumListItem from './AlbumListItem';


const styles = {
  loaderStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};


class AlbumList extends Component {
  componentWillMount() {
    const { getAllAlbums } = this.props;
    getAllAlbums();
  }

  renderAlbumList() {
    const { albums } = this.props;
    return (albums || []).map(a => (
      <AlbumListItem
        key={a.title}
        album={a}
      />
    ));
  }

  render() {
    const { isFetching, isError, errorMsg } = this.props;
    const { loaderStyle } = styles;

    if (isFetching) {
      return (
        <View style={loaderStyle}>
          <ActivityIndicator
            size="large"
          />
        </View>
      );
    }

    return (
      <ScrollView>
        {isError && (
          <Text>{errorMsg}</Text>
        )}
        {!isFetching && !isError && (
          this.renderAlbumList()
        )}
      </ScrollView>
    );
  }
}


function mapStateToProps(state) {
  const { albums, isFetching, isError, errorMsg } = getAlbumState(state);
  return {
    albums,
    isFetching,
    isError,
    errorMsg
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllAlbums,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
