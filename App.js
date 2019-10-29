import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class App extends Component {
  state = {
    name: "fatima",
    age: 21
  };
  // name(name){
  //   return name
  // }

  // name = (name) => name

  NameChange = () => {
    // this.state.name = "ali"
    this.setState({
      name: "ali"
    });
  };
  Agechange = () => {
    this.setState({
      age: 30
    });
  };

  render() {
    return (
      <View style={{ width: "100%", flex: 0.5, backgroundColor: "red" }}>
        <Text style={{ fontSize: 20, marginTop: 50 }}>
          {this.state.name} {this.state.age}
        </Text>
        <View style={{ width: 100 }}>
          <Button title="click me" onPress={() => alert("i am clicked")} />
          <Button
            title="click me to change"
            onPress={() => this.NameChange()}
          />
          <Button title="agechange" onPress={() => this.Agechange()} />
        </View>
        <MyText />
      </View>
    );
  }
}

const MyText = () => {
  return (
    <View>
      <Text>Hello i am talha saeed</Text>
    </View>
  );
};
