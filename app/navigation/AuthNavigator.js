import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import colors from '../config/colors'

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{ headerShown: false, }} 
        />
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false, }} 
        />
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ 
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.color24,
                }
            }} 
        />
    </Stack.Navigator>
)

export default AuthNavigator;

