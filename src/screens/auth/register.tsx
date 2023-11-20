import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { styles } from './authstyles';
import { Link } from '@react-navigation/native';
import { userRegisterSchemaValidation } from '../../formValidations/authForms/vlidation'
import { RegisterFormInputTypes } from '../../types/inputFormTypes';
import errorMsg from '../../components/errorShow/errorMsg';
import { registerFormInitialValue } from '../../formInitialValues/initialValues';
import { Formik } from 'formik';
import { userRegistration } from '../../services/authServices';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import FooterWebView from '../../components/Common/footerWebView';
const Register = ({ navigation }: any) => {
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const initialValues: RegisterFormInputTypes = registerFormInitialValue;
    const [loading, setloading] = React.useState(false)
    const [disable, setdisable] = React.useState(false)
    return (
        <>
            <ScrollView>
                <View style={styles.RegistrationContainer}>
                    <View style={styles.RegistrationlogoContainer}>
                        <Image
                            source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/company_logo.png' }}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.Registrationcard}  >
                        <Text style={styles.Rmaintitle}>Create Your Account</Text>
                        <Text style={styles.subtitle}>Already have an account? <Link style={styles.createlink} to={{ screen: 'Login' }}>Login</Link>
                        </Text>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={userRegisterSchemaValidation}
                            onSubmit={async (values) => {
                                setloading(true);
                                setdisable(true)
                                const requestdata = {
                                    first_name: values.firstName,
                                    last_name: values.lastName,
                                    email: values.email,
                                    password: values.password
                                }
                                const res: any = await userRegistration(AuthToken, requestdata);
                                if (res.status === 201) {
                                    Toast.show({
                                        type: 'success',
                                        text1: 'Registration successfully!'
                                    });
                                    setTimeout(() => {
                                        navigation.navigate('Login');
                                    }, 1000);
                                    setloading(false);
                                    setdisable(false);
                                } else {
                                    Toast.show({
                                        type: 'error',
                                        text1: 'Email allready registred!'
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
                                            placeholder="First Name"
                                            onChangeText={handleChange('firstName')}
                                            onBlur={handleBlur('firstName')}
                                            value={values.firstName}
                                        />
                                        {errorMsg(errors?.firstName && touched.firstName ? errors.firstName : null)}
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Last Name"
                                            onChangeText={handleChange('lastName')}
                                            onBlur={handleBlur('lastName')}
                                            value={values.lastName}
                                        />
                                        {errorMsg(errors?.lastName && touched.lastName ? errors.lastName : null)}
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Email"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                        {errorMsg(errors?.email && touched.email ? errors.email : null)}
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Password"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            secureTextEntry={true}
                                        />
                                        {errorMsg(errors?.password && touched.password ? errors.password : "")}
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Confirm Password"
                                            secureTextEntry={true}
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={handleBlur('confirmPassword')}
                                            value={values.confirmPassword}
                                        />
                                        {errorMsg(errors?.confirmPassword && touched.confirmPassword ? errors.confirmPassword : "")}
                                    </View>
                                    <TouchableOpacity style={styles.button}
                                        onPress={() => handleSubmit()}
                                        disabled={disable}
                                        activeOpacity={disable ? 1 : 0.7}
                                    >
                                        {loading ? <ActivityIndicator size="small" color={'white'} /> : <Text style={styles.buttonText}>REGISTER</Text>}
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
            <FooterWebView />
            <Toast />
        </>
    );
};
export default Register;