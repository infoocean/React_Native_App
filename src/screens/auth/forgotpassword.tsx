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
import { Formik } from "formik";
import { forgotPasswordInputValidation } from '../../formValidations/authForms/vlidation';
import { ForgotFormInputTypes } from '../../types/inputFormTypes';
import { forgotFormInitialValue } from '../../formInitialValues/initialValues';
import errorMsg from '../../components/errorShow/errorMsg';
import { useSelector } from 'react-redux';
import { forgotPassword } from '../../services/authServices';
import Toast from 'react-native-toast-message';
import FooterWebView from '../../components/Common/footerWebView';
const ForgotPassword = () => {
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const initialValues: ForgotFormInputTypes = forgotFormInitialValue;
    const [loading, setloading] = React.useState(false)
    const [disable, setdisable] = React.useState(false)
    return (
        <>
            <ScrollView>
                <View style={styles.LoginContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/company_logo.png' }}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.Logincard}>
                        <Text style={styles.maintitle}>Forgot Password</Text>
                        <Text style={styles.subtitle}>Forgot your password</Text>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={forgotPasswordInputValidation}
                            onSubmit={async (values) => {
                                setloading(true);
                                setdisable(true);
                                const requestdata = {
                                    to: values.email,
                                    emailType: "forgot_password"
                                }
                                const res: any = await forgotPassword(AuthToken, requestdata);
                                if (res.status === 200) {

                                    Toast.show({
                                        type: 'success',
                                        text1: 'Email sent successfully!',
                                        text2: 'Plese check your email and reset your password'
                                    });
                                    setloading(false);
                                    setdisable(false);
                                } else {
                                    Toast.show({
                                        type: 'error',
                                        text1: 'Email not registred!'
                                    });
                                    setloading(false);
                                    setdisable(false);
                                }
                            }}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                touched,
                                errors
                            }) => (
                                <>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Email Address"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                        {errorMsg(errors.email && touched.email ? errors.email : null)}
                                    </View>
                                    <TouchableOpacity style={styles.forgotPasswordButton}>
                                        <Link style={styles.forgotPasswordButtonText} to={{ screen: 'Login' }}>Back to Login?</Link>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}
                                        onPress={() => handleSubmit()}
                                        disabled={disable}
                                        activeOpacity={disable ? 1 : 0.7}
                                    >
                                        {loading ? <ActivityIndicator size="small" color={'white'} /> : <Text style={styles.buttonText}>SEND</Text>}
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
export default ForgotPassword;
