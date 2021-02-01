import React, { useState } from 'react'
import { View, StyleSheet, Text, Keyboard, TouchableWithoutFeedback, StatusBar, Easing } from 'react-native'
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
    regd: Yup.string().required().min(6).max(6).label("RegdNo/RollNo"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function LoginScreen() {
    const [a, setA] = useState(0)
    let size1 = 120;
    let size2 = 80;
    let [loaded] = useFonts({
        Nunito_400Regular,
        Lato_400Regular,
        Inter_900Black,
    })
    if(!loaded) {
        return <AppLoading />
    }
    return (
        <WithPushTransition style={{ flex: 1 }} duration={5000} direction="up" easing= {Easing.bounce}>
            <View style={styles.logoContainer}>
                <Text style={[styles.text, (a == 0) ? styles.sizeOfFont1 : styles.sizeOfFont2]}>Welcome To </Text>
                <AppLogo font={(a == 0) ? 42 : 20} space={(a == 0) ? 3 : 1} />
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={[styles.loginContainer, (a == 0) ? styles.margin1 : styles.margin2 ]}>
                        <MaterialCommunityIcons name="account-circle" size={(a == 0) ? size1 : size2} color={colors.color11} style={styles.icon}/>
                        <AppForm
                            initialValues={({ regd: "", password: ""})}
                            onSubmit={values => console.log(values)}
                            validationSchema={validationSchema}
                        >
                            <View style={styles.formContainer}>
                                <AppFormField
                                    name="user-alt"
                                    title="regd"
                                    placeholder="RollNo or Regd.No" 
                                    color={colors.white}
                                    onFocus={() => { setA(1) }} 
                                    onBlur={() => { setA(0) }}
                                />
                                <AppFormField
                                    name="lock" 
                                    title="password"
                                    placeholder="Password" 
                                    autoCorrect={false}
                                    color={colors.white}
                                    onFocus={() => { setA(1) }} 
                                    onBlur={() => { setA(0) }} 
                                    secureTextEntry={true}
                                />
                            </View>
                            <SubmitButton
                                title="login"
                                fontFamily="Inter_900Black"
                            />
                        </AppForm>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </WithPushTransition>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.color15,
        padding: 15,
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
    margin1: {
        marginTop: -90,
    },
    margin2: {
        marginTop: -70,
    },
    sizeOfFont1: {
        fontSize: 22,
    },
    sizeOfFont2: {
        fontSize: 22,
    },
})
