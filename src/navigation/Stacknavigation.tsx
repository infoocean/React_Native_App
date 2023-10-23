import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import ForgotPassword from '../screens/auth/forgotpassword';
import ResetPasswprd from '../screens/auth/resetpassword';
const Stack = createStackNavigator();
const Stacknavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: '#e8661b',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Register" component={Register}
                options={{
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: '#e8661b',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Forgot Password" component={ForgotPassword}
                options={{
                    title: 'Forgot Password',
                    headerStyle: {
                        backgroundColor: '#e8661b',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Reset Password" component={ResetPasswprd} />
        </Stack.Navigator>
    )
}

export default Stacknavigation