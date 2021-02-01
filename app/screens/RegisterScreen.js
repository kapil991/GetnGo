import React, { useState } from 'react'
import { View, StyleSheet, Text, Keyboard, TouchableWithoutFeedback, StatusBar, Easing, ScrollView } from 'react-native'
import colors from '../config/colors'
import AppTextInput from '../components/AppTextInput'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppButton from '../components/AppButton'
import AppLogo from '../components/AppLogo'
import AppLoading from 'expo-app-loading'
import { WithPushTransition } from 'react-native-simple-transition'
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms/index'

import {
    useFonts,
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
} from '@expo-google-fonts/dev';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).max(50).label("Name"),
    regd: Yup.string().required().min(6).max(6).label("RegdNo/RollNo"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match').label("confirm password"),
    phone: Yup.string().required().min(10).max(10).label("Phone"),
})

export default function LoginScreen() {
    let [loaded] = useFonts({
        Nunito_400Regular,
        Lato_400Regular,
        Inter_900Black,
    })
    if(!loaded) {
        return <AppLoading />
    }
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.textLogo}>GetnGo</Text>
                    <View style={styles.loginContainer}>
                        <AppForm
                            initialValues={({ name: "", regd: "", email: "", password: "", confirmPassword: "", phone: ""})}
                            onSubmit={values => console.log(values)}
                            validationSchema={validationSchema}
                        >
                            <View style={styles.formContainer}>
                                <AppFormField
                                    name="user-alt" 
                                    title="name"
                                    placeholder="Full Name"
                                    color={colors.white}
                                />
                                <AppFormField
                                    name="user-circle" 
                                    title="regd"
                                    placeholder="RollNo or Regd.No" 
                                    color={colors.white}
                                />
                                <AppFormField
                                    name="at"
                                    title="email"
                                    placeholder="Email"
                                    color={colors.white}
                                />
                                <AppFormField
                                    name="lock" 
                                    title="password"
                                    placeholder="Password" 
                                    autoCorrect={false}
                                    color={colors.white} 
                                    secureTextEntry={true}
                                />
                                <AppFormField
                                    name="lock" 
                                    title="confirmPassword"
                                    placeholder="Confirm Password" 
                                    autoCorrect={false}
                                    color={colors.white} 
                                    secureTextEntry={true}
                                />
                                <AppFormField
                                    name="phone" 
                                    title="phone"
                                    placeholder="Phone"
                                    autoCorrect={false}
                                    color={colors.white}
                                    keyboardType="numeric" 
                                />
                            </View>
                            <SubmitButton
                                title="Register"
                                fontFamily="Inter_900Black"
                            />
                        </AppForm>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.color15,
        padding: 15,
        paddingTop: 4,
        /*borderWidth: 1,
        borderColor: 'black',*/
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 15,
        // backgroundColor: colors.color8,
    },
    loginContainer: {
        padding: 10,
        paddingTop: 0,
        // marginTop: -90,
    },
    logoContainer: {
        backgroundColor: colors.color24,
        paddingTop: StatusBar.currentHeight,
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.color1,
        fontSize: 30,
        fontFamily: "Lato_400Regular",
    },
    textLogo: {
        textAlign: 'center',
        fontFamily: "Inter_900Black",
        color: colors.color1,
        fontSize: 30,
    },
})
