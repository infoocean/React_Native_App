import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const data = [
    {
        id: '1',
        thumbnail: 'https://api-mangoit-lms.mangoitsol.com/uploads/1689326061644java.png',
        title: 'Java is a high-level, object-oriented programming.',
        channel: 'Channel 1',
        views: '1.2M views',
        duration: '5:01',
    },
    {
        id: '2',
        thumbnail: 'https://api-mangoit-lms.mangoitsol.com/uploads/16893337941483079594.jpg',
        title: 'Video 2',
        channel: 'Channel 2',
        views: '2.3M views',
        duration: '10:02',
    },
    {
        id: '3',
        thumbnail: 'https://via.placeholder.com/640x360',
        title: 'Video 3',
        channel: 'Channel 3',
        views: '3.4M views',
        duration: '15:03',
    },
    {
        id: '4',
        thumbnail: 'https://via.placeholder.com/640x360',
        title: 'Video 3',
        channel: 'Channel 3',
        views: '3.4M views',
        duration: '15:03',
    },
    {
        id: '5',
        thumbnail: 'https://via.placeholder.com/640x360',
        title: 'Video 3 ',
        channel: 'Channel 3',
        views: '3.4M views',
        duration: '15:03',
    },
    {
        id: '6',
        thumbnail: 'https://via.placeholder.com/640x360',
        title: 'Video 3',
        channel: 'Channel 3',
        views: '3.4M views',
        duration: '15:03',
    },
    {
        id: '7',
        thumbnail: 'https://via.placeholder.com/640x360',
        title: 'Video 3',
        channel: 'Channel 3',
        views: '3.4M views',
        duration: '15:03',
    },
    {
        id: '8',
        thumbnail: 'https://via.placeholder.com/640x360',
        title: 'Video 3',
        channel: 'Channel 3',
        views: '3.4M views',
        duration: '15:03',
    },
]


const renderItem = ({ item }: any) => {
    return (
        <TouchableOpacity style={styles.video} onPress={() => { }}>
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
            <View style={styles.details}>
                <Text style={styles.coursetitle}>{item.channel}</Text>
                <Text style={styles.coursedet}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}



const Courses = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={{ uri: "https://mangoit-lms.mangoitsol.com/Images/sideImages/courseBanner2.jpg" }} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.title}>Courses Information</Text>
                    <FlatList
                        style={styles.list}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Courses;
