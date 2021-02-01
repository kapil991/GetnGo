import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import { AppLoading } from 'expo-app-loading'
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppLogo from './app/components/AppLogo';
import colors from './app/config/colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
})
