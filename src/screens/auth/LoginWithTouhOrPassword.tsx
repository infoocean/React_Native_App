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
import { setLoginUser } from '../../Redux/actions/authActions';
import Icon from 'react-native-vector-icons/Ionicons';
import ANTIcon from 'react-native-vector-icons/AntDesign';
import SMPIcon from 'react-native-vector-icons/SimpleLineIcons';
import TouchID from 'react-native-touch-id';
import { Alert } from 'react-native';
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
    const initialValues: LoginFormInputTypes = loginFormInitialValue;
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setloading] = React.useState(false)
    const [disable, setdisable] = React.useState(false)
    const [openLoginPass, setopenLoginPass] = React.useState(false)
    const [biometryType, setBiometryType] = useState<any>(null);

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

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <ImageBackground
                        source={{ uri: 'https://www.colorhexa.com/e8661b.png' }}
                        style={styles.header}>
                        <Text style={styles.heading}>WELCOME TO LMS APP</Text>
                    </ImageBackground>
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
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Password"
                                                secureTextEntry={true}
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password} />
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
                                    </>
                                )}
                            </Formik>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.loginBottomView}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.btnopacity} onPress={() => navigation.navigate('Home')}>
                            <ANTIcon name='home' color={'black'} size={20} />
                            <Text style={styles.iconFonts}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnopacity} onPress={() => navigation.navigate('About')}>
                            <ANTIcon name='infocirlceo' color={'black'} size={20} />
                            <Text style={styles.iconFonts}>About</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.btnopacity} onPress={() => navigation.navigate('Courses')}>
                            <ANTIcon name='book' size={20} color={'black'} />
                            <Text style={styles.iconFonts}>Courses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnopacity} onPress={() => navigation.navigate('Plans')}>
                            <SMPIcon name='plane' color={'black'} size={20} />
                            <Text style={styles.iconFonts}>Plans</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <Toast />
        </>
    );
};

export default LoginWithTouchpassword;
