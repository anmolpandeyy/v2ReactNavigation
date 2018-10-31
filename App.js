import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Icons from "react-native-vector-icons/Ionicons";

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

//Stack Navigator
const AppStackNavigator = createStackNavigator({
  AuthTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "Your App",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icons name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
});

//Drawer Navigator
const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
});

//AuthStack  navigator Loading Screens
const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});
//Main Switch Navigator
export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
