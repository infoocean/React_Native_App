import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    RefreshControl,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { styles } from './authstyles';
import { Link } from '@react-navigation/native';
import errorMsg from '../../components/errorShow/errorMsg';
import { Formik } from 'formik';
import { loginFormInitialValue } from '../../formInitialValues/initialValues';
import { loginInputValidation } from '../../formValidations/authForms/vlidation';
import { LoginFormInputTypes } from '../../types/inputFormTypes';
import { useSelector } from 'react-redux';
import { userLogin } from '../../services/authServices';
import Toast from 'react-native-toast-message';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setLogedIn, setLoginPin, setLoginUser } from '../../Redux/actions/authActions';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import FooterWebView from '../../components/Common/footerWebView';
const Login = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const LoginUserData = useSelector((state: any) => state?.setLoginUserReducer);
    const initialValues: LoginFormInputTypes = loginFormInitialValue;
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setloading] = React.useState(false)
    const [disable, setdisable] = React.useState(false)
    const [pin, setPin] = useState('');
    const [confirmpin, setconfirmpin] = useState('');
    const [showBottomView, setShowBottomView] = useState(true);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const pinCodeChanged = (code: any) => {
        setPin(code);
    };
    const confirmpinCodeChanged = (code: any) => {
        setconfirmpin(code);
    };
    const handlePinSubmit = () => {
        if (pin === confirmpin) {
            dispatch(setLoginPin({ loginpin: pin, loginPinSkip: "yes" }));
            navigation.navigate('Login');

        } else {
            Alert.alert('Pin and Confirm pin are not same', "", [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ]);
        }
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    <View style={styles.LoginContainer}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={{ uri: `https://mangoit-lms.mangoitsol.com/Images/pages_icon/company_logo.png` }}
                                style={styles.logo}
                            />
                        </View>
                        <View style={styles.Logincard}>
                            <Text style={styles.maintitle}>Login</Text>
                            <Text style={styles.subtitle}>Don‘t have an account?
                                <Link style={styles.createlink} to={{ screen: 'Register' }} > Create Now
                                </Link>
                            </Text>
                            {!LoginUserData?.logedIn ? (<Formik
                                initialValues={initialValues}
                                validationSchema={loginInputValidation}
                                onSubmit={async (values) => {
                                    setloading(true);
                                    setdisable(true)
                                    const requestdata = {
                                        email: values.email,
                                        password: values.password
                                    }
                                    const res: any = await userLogin(AuthToken, requestdata);
                                    if (res.status === 200) {
                                        const loginUserData = await res.json();
                                        Toast.show({
                                            type: 'success',
                                            text1: 'Login successfully!'
                                        });
                                        setTimeout(() => {
                                            dispatch(setLoginUser(loginUserData))
                                            dispatch(setLogedIn(true))
                                            dispatch(setLoginPin({ loginpin: null, loginPinSkip: "no", loginprocess: false }))
                                        }, 1000);
                                        setloading(false);
                                        setdisable(false);
                                    } else {
                                        Toast.show({
                                            type: 'error',
                                            text1: 'Invalid credentials!'
                                        });
                                        setloading(false);
                                        setdisable(false);
                                    }
                                }}
                            >
                                {({ handleChange, handleBlur, handleSubmit, touched, values, errors }) => (
                                    <>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Email"
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                            />
                                            {errorMsg(errors.email && touched.email ? errors.email : null
                                            )}
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Password"
                                                secureTextEntry={true}
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                            />
                                            {errorMsg(errors.password && touched.password ? errors.password : null)}
                                        </View>
                                        <TouchableOpacity style={styles.forgotPasswordButton}>
                                            <Link style={styles.forgotPasswordButtonText} to={{ screen: 'Forgot Password' }} >Forgot a password?</Link>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}
                                            disabled={disable}
                                            activeOpacity={disable ? 1 : 0.7}
                                        >
                                            {loading ? <ActivityIndicator size="small" color={'white'} /> : <Text style={styles.buttonText}>SIGN IN</Text>}
                                        </TouchableOpacity>
                                    </>
                                )}
                            </Formik>) :
                                <>
                                    <View style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
                                        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>Add 4 DigitLogin PIN:</Text>
                                        <Text style={{ marginTop: 20 }}>Enter Pin</Text>
                                        <SmoothPinCodeInput
                                            codeLength={4}
                                            cellSize={30}
                                            cellSpacing={10}
                                            cellStyle={{
                                                borderBottomWidth: 2,
                                                borderColor: 'gray',
                                            }}
                                            cellStyleFocused={{
                                                borderColor: 'gray',

                                            }}
                                            value={pin}
                                            onTextChange={pinCodeChanged}
                                            textStyle={{ fontSize: 18 }}
                                        />
                                        <Text style={{ marginTop: 20 }}>Confirm Pin</Text>
                                        <SmoothPinCodeInput
                                            codeLength={4}
                                            cellSize={30}
                                            cellSpacing={10}
                                            cellStyle={{
                                                borderBottomWidth: 2,
                                                borderColor: 'gray',
                                            }}
                                            cellStyleFocused={{
                                                borderColor: 'gray',

                                            }}
                                            value={confirmpin}
                                            onTextChange={confirmpinCodeChanged}
                                            textStyle={{ fontSize: 18 }}
                                        />

                                    </View>
                                    <TouchableOpacity style={[styles.button]} onPress={() => handlePinSubmit()}
                                    ><Text style={styles.buttonText}>SET PIN</Text></TouchableOpacity>
                                    {/* <Link style={[styles.createlink, { marginTop: 20 }]} to={{ screen: 'Login' }} > Skip
                                    </Link> */}
                                </>
                            }
                            <View style={styles.seprator}>
                                <View style={styles.horizantolline} />
                                <View>
                                    <Text style={styles.sepratortext}>OR</Text>
                                </View>
                                <View style={styles.horizantolline} />
                            </View>
                            <TouchableOpacity
                                style={styles.buttonGPlusStyle}
                                activeOpacity={0.5}>
                                <Image
                                    source={{
                                        uri:
                                            'https://cdn-teams-slug.flaticon.com/google.jpg',
                                    }}
                                    style={styles.buttonImageIconStyle}
                                />
                                <Text style={styles.buttonTextStyle}>
                                    Continue with Google
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <FooterWebView />
            </SafeAreaView>
            <Toast />
        </>
    );
};
export default Login;
