import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Register from '../screens/auth/register';
import ForgotPassword from '../screens/auth/forgotpassword';
import ResetPasswprd from '../screens/auth/resetpassword';
import LoginWithTouchpassword from '../screens/auth/LoginWithTouhOrPassword';
import HomeScreen from '../screens/home';
import { About } from '../screens/about';
import Plans from '../screens/plans';
import Courses from '../screens/courses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Login from '../screens/auth/login';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Homes"
                component={HomeScreen}
                options={{
                    headerShown: false, tabBarStyle: {
                        display: 'none',
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const Stacknavigation = () => {
    const LoginUserData = useSelector((state: any) => state?.setLoginUserReducer);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login" component={Object.keys(LoginUserData?.userDetail).length !== 0 && LoginUserData?.logedIn === true && LoginUserData?.loginPin?.loginPinSkip === "yes" ? LoginWithTouchpassword : Login}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: '#e8661b',
                    },
                    headerShown: false,
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
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#e8661b',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="About" component={About}
                options={{
                    title: 'About',
                    headerStyle: {
                        backgroundColor: '#e8661b',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Plans" component={Plans}
                options={{
                    title: 'Plans',
                    headerStyle: {
                        backgroundColor: '#e8661b',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Courses" component={Courses}
                options={{
                    title: 'Courses',
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
