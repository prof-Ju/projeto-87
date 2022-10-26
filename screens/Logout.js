import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Logout extends Component {
  componentDidMount(){
    // firebase.auth().signOut();
    this.changeScreen();
  }


  changeScreen =()=>{
     this.props.navigation.navigate("LoginScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login out...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
