import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 420, height: 1000, backgroundColor: 'red'}} /> 
      </View>
    );
  }
}
