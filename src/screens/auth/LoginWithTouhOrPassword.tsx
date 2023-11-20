import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    RefreshControl,
    ActivityIndicator,
    StyleSheet,
    ImageBackground,
    Keyboard,
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
import { setLoginPin, setLoginUser } from '../../Redux/actions/authActions';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchID from 'react-native-touch-id';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Alert } from 'react-native';
import FooterWebView from '../../components/Common/footerWebView';
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
const LoginWithTouchpassword = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const userLoginDT = useSelector((state: any) => state?.setLoginUserReducer);
    const initialValues: LoginFormInputTypes = loginFormInitialValue;
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setloading] = React.useState(false)
    const [disable, setdisable] = React.useState(false)
    const [openLoginPass, setopenLoginPass] = React.useState(false)
    const [biometryType, setBiometryType] = useState<any>(null);
    const [pin, setPin] = useState('');
    const handleAuthentication = () => {
        TouchID.isSupported()
            .then(authenticateBiometric)
            .catch((error) => {
                Alert.alert('Biometric authentication not supported', error.message);
            });
    };
    const authenticateBiometric = () => {
        TouchID.authenticate('Authenticate', optionalConfigObject)
            .then((success: any) => {
                Alert.alert('Authenticated Successfully');
            })
            .catch((error: { message: string | undefined; }) => {
                Alert.alert('Authentication Failed', error.message);
            });
    };
    useEffect(() => {
        TouchID.isSupported()
            .then((biometryType) => {
                setBiometryType(biometryType);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    const pinCodeChanged = (code: any) => {
        setPin(code);
        if (code.length === 4) {
            if (userLoginDT?.loginPin?.loginpin === code) {
                dispatch(setLoginPin({ loginpin: userLoginDT?.loginPin?.loginpin, loginPinSkip: userLoginDT?.loginPin?.loginPinSkip, loginprocess: true }))
            } else {
                Alert.alert('Incorrect Pin', "", [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                ]);
            }
        }
    };
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <ImageBackground
                        source={{ uri: 'https://www.colorhexa.com/e8661b.png' }}
                        style={styles.header}>
                        <Text style={styles.heading}>WELCOME TO LMS APP</Text>
                    </ImageBackground>
                    <View style={styles.pinLoginContainer}>
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
                            <Formik
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
                                        {openLoginPass && (<><View style={styles.inputContainer}>
                                            {/* <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Email"
                                                    onChangeText={handleChange('email')}
                                                    onBlur={handleBlur('email')}
                                                    value={values.email}
                                                />
                                                {errorMsg(errors.email && touched.email ? errors.email : null
                                                )}
                                            </View> */}
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Password"
                                                    secureTextEntry={true}
                                                    onChangeText={handleChange('password')}
                                                    onBlur={handleBlur('password')}
                                                    value={values.password} />
                                                {errorMsg(errors.password && touched.password ? errors.password : null)}
                                            </View>
                                        </View>
                                            <TouchableOpacity style={styles.forgotPasswordButton}>
                                                <Link style={styles.forgotPasswordButtonText} to={{ screen: 'Forgot Password' }} >Forgot a password?</Link>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}
                                                disabled={disable}
                                                activeOpacity={disable ? 1 : 0.7}
                                            >
                                                {loading ? <ActivityIndicator size="small" color={'white'} /> : <Text style={styles.buttonText}>SIGN IN</Text>}
                                            </TouchableOpacity></>)}
                                        <TouchableOpacity
                                            style={[
                                                styles.buttons,
                                                styles.infoButton]}
                                            onPress={handleAuthentication}
                                        >
                                            <Text style={styles.buttonTextnew}>Login with </Text>
                                            <Icon name='finger-print' size={20} color="#fff" />
                                        </TouchableOpacity>
                                        {!openLoginPass && <View style={styles.sepratornew}>
                                            <View style={styles.horizantolline} />
                                            <View>
                                                <Text style={styles.sepratortext}>OR</Text>
                                            </View>
                                            <View style={styles.horizantolline} />
                                        </View>}
                                        {!openLoginPass && <TouchableOpacity
                                            style={[
                                                styles.buttons,
                                                styles.passButton]}
                                            onPress={() => setopenLoginPass(true)}
                                        >
                                            <Text style={styles.buttonTextnew}>Login with Password </Text>
                                        </TouchableOpacity>}

                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ marginBottom: 6, paddingBottom: 0 }}>Or, Enter 4 Digit Login PIN:</Text>
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

                                            <Link to={{ screen: 'Forgot Pin' }} style={{ marginTop: 15, color: '#e8661b', }}>Forgot Pin</Link>
                                        </View>
                                    </>
                                )}
                            </Formik>
                        </View>
                    </View>
                </ScrollView>
                <FooterWebView />
            </SafeAreaView>
            <Toast />
        </>
    );
};

export default LoginWithTouchpassword;
