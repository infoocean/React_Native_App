/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacknavigation from './src/navigation/Stacknavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorizationToken } from './src/services/authServices';
import { setauthtoken } from './src/Redux/actions/authActions';
import { Drawernavigation } from './src/navigation/DrawerNavigator';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

function App(): JSX.Element {
  const dispatch = useDispatch();
  //get  login user det from redux store
  const LoginUserData = useSelector((state: any) => state?.setLoginUserReducer?.userDetail);
  const LoginUserDt = useSelector((state: any) => state?.setLoginUserReducer);
  const gettoken = async () => {
    const authtoken = await getAuthorizationToken();
    dispatch(setauthtoken(authtoken))
  }
  useEffect(() => {
    gettoken();
  }, [])
  return (
    <NavigationContainer>
      {(Object.keys(LoginUserData).length !== 0) && LoginUserData?.userDetails?.role_id !== 1 && LoginUserDt?.loginPin?.loginpin != null && LoginUserDt?.loginPin?.loginprocess === true ? <BottomTabNavigation /> : (Object.keys(LoginUserData).length !== 0) && LoginUserData?.userDetails?.role_id !== 2 && LoginUserDt?.loginPin?.loginpin != null && LoginUserDt?.loginPin?.loginprocess === true ? <Drawernavigation /> : <Stacknavigation />
      }
    </NavigationContainer>
  );
}
export default App;
