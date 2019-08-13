import React, {Component} from "react";

import {View, Text, StyleSheet, Switch, TouchableOpacity} from "react-native";

class Row extends Component {

  render() {
    const { complete } = this.props;
    return (
      <View style={styles.container}>
        <Switch
          value = {complete}
          onValueChange = {this.props.onComplete}
          trackColor = 'stelblue'
          trackColor = 'stelblue'
          thumbColor='lightpink'
        />
        <View style={styles.textWrap}>
          <Text style={[styles.text, complete && styles.complete]}>{this.props.text}</Text>
        </View>
        <TouchableOpacity onPress={this.props.onRemove}>
          <Text style={styles.remove}>delete</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'skyblue',
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  complete: {
    textDecorationLine: "line-through"
  },
  text: {
    fontSize: 24,
    color: "black"
  },
  remove: {
    fontSize: 20,
    color: "steelblue"
  }
});

export default Row;