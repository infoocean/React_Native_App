/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacknavigation from './src/navigation/Stacknavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorizationToken } from './src/services/authServices';
import { setauthtoken } from './src/Redux/actions/authActions';
import { Drawernavigation } from './src/navigation/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Text, View } from 'react-native';
import TouchID from 'react-native-touch-id';

const Stack = createStackNavigator()
const DrawerStack = createDrawerNavigator()
const BottomStack = createBottomTabNavigator()

// Drawer code
function AppDrawerStack() {
  return (
    <DrawerStack.Navigator drawerContent={props => <DrawerView {...props} />}>
      <DrawerStack.Screen name='AppBottomStack' component={AppBottomStack} />
    </DrawerStack.Navigator>
  )


}

function DrawerView(props: any) {
  return (
    <View>
      <Text>
        Drawer View
      </Text>
    </View>
  )
}

// Bottom Stack Part

function AppBottomStack() {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
        name='BottomScreenOne'
        component={BottomScreenOne}

      />
      <BottomStack.Screen
        name='BottomScreenTwo'
        component={BottomScreenTwo}
      />
    </BottomStack.Navigator>
  )
}

function BottomScreenOne() {
  return (
    <View>
      <Text>
        BottomScreenOne
      </Text>
    </View>
  )
}

function BottomScreenTwo() {
  return (
    <View>
      <Text>
        BottomScreenTwo
      </Text>
    </View>
  )
}

const optionalConfigObject = {
  title: 'Please Authenticate', // Android
  imageColor: '#000', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Slightly Touch sensor', // Android
  sensorErrorDescription: "Failed", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS
};

function App(): JSX.Element {
  const dispatch = useDispatch();
  //get  login user det from redux store
  const LoginUserData = useSelector((state: any) => state?.setLoginUserReducer?.userDetail);
  const gettoken = async () => {
    const authtoken = await getAuthorizationToken();
    dispatch(setauthtoken(authtoken))
  }
  useEffect(() => {
    gettoken();
    touchIdAuth();
  }, [])

  const touchIdAuth = () => {
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else if (biometryType === "TouchID") {
          console.log('TouchID is supported.');
          TouchID.authenticate("Authenticate", optionalConfigObject)
            .then((success: any) => {
              Alert.alert('Authenticated Successfully');
            })
            .catch((error: any) => {
              Alert.alert('Authentication Failed', error.toString());
            });
        } else {
          <Stacknavigation />
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });

  }
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      {(Object.keys(LoginUserData).length !== 0) && LoginUserData?.userDetails?.role_id !== 1 ? <BottomTabNavigation /> : (Object.keys(LoginUserData).length !== 0) && LoginUserData?.userDetails?.role_id !== 2 ? <Drawernavigation /> : <Stacknavigation />
      }
    </NavigationContainer>
  );
}
export default App;
