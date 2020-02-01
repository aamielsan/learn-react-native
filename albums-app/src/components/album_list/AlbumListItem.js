import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from '../card/Card';
import CardSection from '../card/CardSection';
import { Button } from '../common';


class AlbumListItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnBuy = this.handleOnBuy.bind(this);
  }

  handleOnBuy() {
    const { album: { url } = {} } = this.props;
    Linking.openURL(url);
  }

  render() {
    const { album } = this.props;
    const { artist, title, image, thumbnail_image } = album || {};
    const {
      textStyle,
      albumStyle,
      headerStyle,
      thumbnailStyle,
      thumbnailContainerStyle,
      textContainerStyle
    } = styles;

    return (
      <Card>
        <CardSection>
          <Image
            style={albumStyle}
            source={{ uri: image }}
          />
        </CardSection>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={textContainerStyle}>
            <Text style={[textStyle, headerStyle]}>{title}</Text>
            <Text style={[textStyle]}>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleOnBuy}>Buy Me</Button>
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  albumStyle: {
    flex: 1,
    width: null,
    height: 300,
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  headerStyle: {
    fontSize: 18,
  },
  textStyle: {
    color: 'black'
  },
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
};


export default AlbumListItem;
