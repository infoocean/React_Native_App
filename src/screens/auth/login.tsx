import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    RefreshControl,
    ActivityIndicator,
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
const Login = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const initialValues: LoginFormInputTypes = loginFormInitialValue;
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setloading] = React.useState(false)
    const [disable, setdisable] = React.useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
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
                            </Formik>
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
            </SafeAreaView>
            <Toast />
        </>
    );
};
export default Login;
