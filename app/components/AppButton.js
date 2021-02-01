import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

import colors from '../config/colors'

export default function AppButton({ name, onPress, style, fontFamily }) {
    return (
        <View style={styles.container}>
            <TouchableRipple
                style={[styles.button, style]}
                borderless={true}
                onPress={onPress}>
                <Text style={[styles.buttonText, { fontFamily }]}>{name}</Text>
            </TouchableRipple>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    button: {
        color: colors.dark,
        width: '100%',
        backgroundColor: colors.color11,
        alignSelf: 'center',
        padding: 20,
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 5,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
    },
})