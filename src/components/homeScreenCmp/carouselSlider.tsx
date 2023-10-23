import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { carouselItems } from '../../assets/staticdata';
const { width, height } = Dimensions.get('window');

const CarouselSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <View style={styles.carouselContainer}>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    const x = event.nativeEvent.contentOffset.x;
                    const index = Math.floor(x / (width - 60));
                    if (index !== activeIndex) {
                        setActiveIndex(index);
                    }
                }}
                scrollEventThrottle={16}
            >
                {carouselItems.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.content}>{item.content}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.dotContainer}>
                {carouselItems.map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
                        <View
                            style={[
                                styles.dot,
                                { backgroundColor: index === activeIndex ? 'white' : 'gray' },
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}
export default CarouselSlider


const styles = StyleSheet.create({
    carouselContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 370,
    },
    itemContainer: {
        width: width - 60,
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    image: {
        width: '100%',
        height: '60%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    textContainer: {
        width: '90%',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        position: 'absolute',
        bottom: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: "black",
    },
    content: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    dotContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        margin: 5,
        borderWidth: 1
    },
});




