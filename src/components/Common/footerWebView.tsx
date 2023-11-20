import React, { useEffect, useState } from 'react'
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ANTIcon from 'react-native-vector-icons/AntDesign';
import SMPIcon from 'react-native-vector-icons/SimpleLineIcons';
function FooterWebView({ navigation }: any) {
    const [showBottomView, setShowBottomView] = useState(true);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setShowBottomView(false);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setShowBottomView(true);
            }
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [])


    return (
        <>
            {showBottomView && (
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

            )}
        </>
    )
}

const styles = StyleSheet.create({
    loginBottomView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },

    iconContainer: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    btnopacity: {
        marginHorizontal: 20,
        alignItems: 'center',
    },

    iconFonts: {
        color: 'black',
        fontSize: 15,
    },
})

export default FooterWebView