import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
const errorMsg = (errorMessage: any) => {
    return (
        <Text style={styles.text}>{errorMessage}</Text>
    );
}
export default errorMsg
export const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 10,
        textAlign: 'justify'
    }
});



