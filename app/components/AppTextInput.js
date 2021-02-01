import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
// import { BoxShadow } from "react-native-shadow"
import AppLoading from 'expo-app-loading'
import {
    useFonts,
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
  } from '@expo-google-fonts/dev';
import colors from '../config/colors'
export default function AppTextInput({ name, size=24, color, ...otherProps }) {
    let [loaded] = useFonts({
        Nunito_400Regular
    })
    if(!loaded) {
        return <AppLoading />
    }
    return (
        <View style={styles.container}>
            {name && <FontAwesome5 name={name} size={size} color={color} style={styles.icon}/>}
            <TextInput 
                style={styles.field}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.color11,
    },
    field: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10,
        width: '100%',
        height: '100%',
        color: colors.grey,
        padding: 15,
        fontFamily: "Nunito_400Regular",
    },
    icon: {
        backgroundColor: colors.color11,
        padding: 15,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 2,
        borderColor: colors.color11,
        width: 56,
    },
})