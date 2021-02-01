import React from 'react'
import { View, StyleSheet, StatusBar, Text } from 'react-native'
import colors from '../config/colors'
import * as Font from 'expo-font';
import {
    useFonts,
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
} from '@expo-google-fonts/dev';
import AppLoading from 'expo-app-loading';


export default function AppLogo({ font = 26, space = 0, tag }) {
    const [loaded] = useFonts({
        Inter_900Black,
        Nunito_400Regular,
        Lato_400Regular,
    });
    if (!loaded) { 
        return <AppLoading />
        //console.log(error)
    }

    return (
        <>
        <View style={styles.container}>
            <Text style={{ color: colors.color1, fontSize: font, letterSpacing: space, fontFamily: "Inter_900Black"}}>G</Text>
            <Text style={{ color: colors.color1, fontSize: font, letterSpacing: space, fontFamily: "Inter_900Black"}}>e</Text>
            <Text style={{ color: colors.color1, fontSize: font, letterSpacing: space, fontFamily: "Inter_900Black"}}>t</Text>
            <Text style={{ color: colors.color1, fontSize: font, letterSpacing: space, fontFamily: "Inter_900Black"}}>n</Text>
            <Text style={{ color: colors.color1, fontSize: font, letterSpacing: space, fontFamily: "Inter_900Black"}}>G</Text>
            <Text style={{ color: colors.color1, fontSize: font, letterSpacing: space, fontFamily: "Inter_900Black"}}>o</Text>
        </View>
        {tag && <View style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
        </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    tagContainer: {
        marginTop: -20,
    },
    tag: {
        fontSize: 17,
        fontFamily: 'Lato_400Regular',
        color: colors.color15,
        textAlign: 'center',
    },
})