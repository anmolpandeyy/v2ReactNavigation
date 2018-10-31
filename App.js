import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import { createSwitchNavigator } from "react-navigation";

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
