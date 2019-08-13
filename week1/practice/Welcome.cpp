import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.white}>   </Text> 
        <Text style={styles.black}>Worksheet1</Text>
        <Text style={styles.white}>{"\n"}First lab of the online React Native course</Text> 
        <View style={{width: 420, height: 1000, backgroundColor: 'red'}} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  black: {
    color: 'black', 
    textAlign: 'center',
    fontSize: 50,
    backgroundColor:'red',
  },
  white: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor:'red',
  },
});

