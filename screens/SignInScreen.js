import React, { Component } from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";

class SignInScreen extends Component {
  signIn = async () => {
    await AsyncStorage.setItem("userToken", "Anmol");
    this.props.navigation.navigate("AuthLoading");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Complete sign in" onPress={this.signIn} />
      </View>
    );
  }
}
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
