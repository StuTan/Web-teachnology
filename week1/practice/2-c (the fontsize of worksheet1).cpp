import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.black}>Worksheet1</Text>
        <Text style={styles.white}>First lab of the online React Native course</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  black: {
    color: 'black', 
    textAlign: 'center',
    fontSize: 60,
  },
  white: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

