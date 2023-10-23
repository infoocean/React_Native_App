import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { capitalizeFirstLetter } from '../../commonFunctions/fommonFn'

function AvatarImg(props: any) {
    return (
        <View style={styles.avatarContainer1}>
            <Text style={styles.avatar1} >
                {capitalizeFirstLetter(props?.firstName) + capitalizeFirstLetter(props?.lastName)}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    avatarContainer1: {
        width: 75,
        height: 75,
        borderRadius: 70,
        borderWidth: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar1: {
        fontSize: 30,
        fontWeight: '700',
    },
})

export default AvatarImg