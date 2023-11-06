import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { carouselItems } from '../../assets/staticdata';
const sliderWidth = 400; // Define the slider width
const itemWidth = 310; // Define the item width
const CarouselSlider = () => {
    const _renderItem = ({ item }: any) => {
        return (
            <View style={styles.slide}>
                <View style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.cardImage} />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardsubtitle}>{item.content}</Text>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.SliderContainer}>
            <Carousel
                data={carouselItems}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                loop={true}
            />
        </View>
    )
}
export default CarouselSlider

const styles = StyleSheet.create({
    SliderContainer: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20
    },
    slide: {
        width: itemWidth,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: '60%',
    },
    cardTextContainer: {
        padding: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    cardsubtitle: {
        color: "gray",
        fontSize: 12
    }
});






