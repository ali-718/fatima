import React, { Component } from "react";
import { Text, View } from "react-native";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red"
        }}
      >
        <Header />
        <Header />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
