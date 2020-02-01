import React, { Component } from 'react';
import {
  Modal,
  Text,
  View
} from 'react-native';

import {
  Button
} from './';


const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainerStyle: {
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center'
  },
  buttonStyle: {
    margin: 10,
    flex: undefined,
    alignSelf: 'stretch'
  },
}


class SimpleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible || false
    };

    this._hideModal = this._hideModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { visible: prevVisible } = prevProps;
    const { visible: currVisible } = this.props;

    if (prevVisible !== currVisible) {
      this._setModalVisibility(currVisible);
    }
  }

  _setModalVisibility(visible) {
    this.setState({
      visible
    });
  }

  _hideModal() {
    const { onHide } = this.props;

    this._setModalVisibility(false);

    onHide
      && onHide();
  }

  render() {
    const { visible } = this.state;
    const { children, onDismiss } = this.props;
    const { containerStyle, innerContainerStyle, buttonStyle } = styles;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={this._hideModal}
        onDismiss={onDismiss}
      >
        <View style={containerStyle}>
          <View style={innerContainerStyle}>
            {children}
            <Button
              style={buttonStyle}
              onPress={this._hideModal}
            >
              Close
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}


export default SimpleModal;
