import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class LoginArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
          marginBottom: 20,
          height: 60,
          width: '100%',
          elevation: 5,
      }}>
        <Image source={require('../../assets/img/login_arrow.png')}
        style={{
            width: 20,
            height: 60
        }}/>
      </View>
    );
  }
}
