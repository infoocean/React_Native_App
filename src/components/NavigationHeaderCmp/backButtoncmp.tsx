import { Link } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const BackButtonhandler = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <View>
            <TouchableOpacity onPress={handleBack}>
                <MIcon
                    name="keyboard-backspace"
                    color='black'
                    style={{ color: "white", marginLeft: 10 }}
                    size={25}
                />
            </TouchableOpacity>
        </View>
    );
}
export default BackButtonhandler