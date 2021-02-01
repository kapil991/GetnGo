import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLogo from '../components/AppLogo';

import colors from '../config/colors'

import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/dev';
import AppButton from '../components/AppButton';
import AppLoading from 'expo-app-loading';


export default function WelcomeScreen({ navigation }) {

  let [loaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
  })
  if(!loaded) {
      return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo font={50} tag="GET PASS-GO OUT" />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton 
          name="Register" 
          style={styles.button} 
          fontFamily="Nunito_400Regular" 
          onPress={() => navigation.navigate("Register")} 
        />
        <AppButton 
          name="Login" 
          style={styles.button} 
          fontFamily="Nunito_400Regular" 
          onPress= {() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color24,
    // alignItems: 'baseline',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 20,
    marginTop: 20,
    // backgroundColor: 'red',
  },
  logoContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: colors.color21,
    elevation: 10,
  },
})
