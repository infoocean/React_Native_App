import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Userdashboard from '../screens/userScreen/dashboard';
import ProfileScreen from '../screens/profile';
import UserSubscription from '../screens/userScreen/subscription';
import UserEnrolledCourses from '../screens/userScreen/courses';
import Chats from '../screens/chats';
import NavRighrtheader from '../components/NavigationHeaderCmp/NavHeader';
import BackButtonhandler from '../components/NavigationHeaderCmp/backButtoncmp';
import { createStackNavigator } from '@react-navigation/stack';
import CourseDetails from '../screens/userScreen/courses/courseDetails';
import UserSubscriptionDetails from '../screens/userScreen/subscription/subscriptionDetails';
import { ChatDetails } from '../screens/chats/chatsDetails';
const Tab = createBottomTabNavigator();
const NavStack = createStackNavigator();

//course stack navogation
const CourseStackScreen = () => (
    <NavStack.Navigator screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#e8661b', height: 50 },
        headerTintColor: '#fff',
    })}  >
        <NavStack.Screen name="Courses"
            component={UserEnrolledCourses}
            options={{
                headerRight: () =>
                    <NavRighrtheader />,
                headerLeft: () =>
                    <BackButtonhandler />,
            }}
        />
        <NavStack.Screen name="Course Details"
            component={CourseDetails}
            options={{
                headerRight: () =>
                    <NavRighrtheader />,
            }} />
    </NavStack.Navigator>
);

//subscription stack navigation
const SubscriptionStackScreen = () => (
    <NavStack.Navigator screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#e8661b', height: 50 },
        headerTintColor: '#fff',
    })}  >
        <NavStack.Screen name="Subscriptions"
            component={UserSubscription}
            options={{
                headerRight: () =>
                    <NavRighrtheader />,
                headerLeft: () =>
                    <BackButtonhandler />,
            }}
        />
        <NavStack.Screen name="Subscription Details"
            component={UserSubscriptionDetails}
            options={{
                headerRight: () =>
                    <NavRighrtheader />,
            }} />
    </NavStack.Navigator>
);

//chats stack navigation
const ChatStackScreen = () => (
    <NavStack.Navigator screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#e8661b', height: 50 },
        headerTintColor: '#fff',
    })}  >
        <NavStack.Screen name="Chats"
            component={Chats}
            options={{
                headerRight: () =>
                    <NavRighrtheader />,
                headerLeft: () =>
                    <BackButtonhandler />,
            }}
        />
        <NavStack.Screen name="Chats Details"
            component={ChatDetails}
            options={{
                headerRight: () =>
                    <NavRighrtheader />,
            }} />
    </NavStack.Navigator>
);
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#e8661b', height: 50 },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: '400', fontSize: 18 },
                tabBarActiveTintColor: '#e8661b',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;
                    if (route.name === 'Chats') {
                        iconName = focused
                            ? 'info-circle'
                            : 'info-circle';
                    } else if (route.name === 'Courses') {
                        iconName = focused
                            ? 'book'
                            : 'book';
                    } else if (route.name === 'Subscriptions') {
                        iconName = focused
                            ? 'plane'
                            : 'plane';
                    } else if (route.name === 'Dashboard') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'user'
                            : 'user';
                    } return (
                        <Icon
                            name={iconName}
                            size={22}
                            color={color}
                        />
                    );
                }
            })}>
            <Tab.Screen
                name="Dashboard"
                component={Userdashboard}
                options={{
                    tabBarLabel: 'Dashboard',
                    title: 'Dashboard',
                    headerRight: () =>
                        <NavRighrtheader />,
                }}
            />
            <Tab.Screen
                name="Courses"
                component={CourseStackScreen}
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen
                name="Subscriptions"
                component={SubscriptionStackScreen}
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    title: 'Profile',
                    headerRight: () =>
                        <NavRighrtheader />,
                    headerLeft: () =>
                        <BackButtonhandler />,

                }} />
            <Tab.Screen
                name="Chats"
                component={ChatStackScreen}
                options={{
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigation

