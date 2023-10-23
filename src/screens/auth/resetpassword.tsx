import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { styles } from './authstyles';
const ResetPasswprd = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/company_logo.png' }}
                    style={styles.logo}
                />
            </View>
            <View style={styles.card}>
                <Text style={styles.maintitle}>Reset Password</Text>
                <Text style={styles.subtitle}>Reset your password</Text>
                <TextInput style={styles.input} placeholder="Password" />
                <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>RESET</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ResetPasswprd;

