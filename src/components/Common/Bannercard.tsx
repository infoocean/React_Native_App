import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Bannercard(props: any) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://png.pngtree.com/thumb_back/fh260/back_pic/02/50/63/71577e1cf59d802.jpg" }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Explore Our Websites</Text>
                <Text style={styles.description}>
                    A brief description of your banner goes here.
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        bottom: 30,
        padding: 10,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e8661b',
        textAlign: 'center',
    },
    description: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
    },
})

export default Bannercard