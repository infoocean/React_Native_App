import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FlatList, Image, View } from 'react-native'
import { SERVER_API_URL } from '../../api/api'
import MIcon from 'react-native-vector-icons/MaterialIcons'
function MainCoursecard(props: any) {
    return (
        <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={props?.Courses}
            horizontal={false}
            numColumns={2}
            renderItem={post => {
                const item = post.item
                return (
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={{ uri: `${SERVER_API_URL}/${item?.course?.image}` }} />
                        <View style={styles.cardHeader}>
                            <View style={styles.coursenamesec}>
                                <Text style={styles.title}>{item?.course?.title}</Text>
                                <Text style={styles.price}>Post date : 02,Nov 2023</Text>
                            </View>
                            <View style={styles.coursenamesec}>
                                <Text style={styles.type}>Type : {item?.course?.is_chargeable}</Text>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.sessionBarContainer}>
                                <View style={styles.sessionBarSection}>
                                    <View style={styles.sessionBar}>
                                        <MIcon name='view-module' color={"#000"} size={15} /><Text style={styles.footertitle} > {item.moduleCount.find((count: any) => count.course_id === item.course.id)?.moduleCount || 0} Modules</Text>
                                    </View>
                                </View>
                                <View style={styles.sessionBarSection}>
                                    <View
                                        style={styles.sessionBar}
                                    >
                                        <MIcon name='padding' color={"#000"} size={15} />
                                        <Text style={styles.footertitle}>{item.sessionCount.find((count: any) => count.course_id === item.course.id)?.sessionCount || 0} Session</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        marginBottom:10,
        marginTop:5,
        marginLeft:12,
        marginRight:12,
    },
    listContainer: {
        alignItems: 'center',
    },
    card: {
        marginBottom:20,
        backgroundColor: 'white',
        flexBasis: '47%',
        marginHorizontal: 7,
        borderRadius: 5,
        shadowColor: 'gray',
        shadowRadius: 2,
        elevation: 10,
    },
    cardImage: {
        flex: 1,
        height: 100,
        width: '100%',
    },
    cardHeader: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    coursenamesec: {},
    title: {
        fontSize: 16,
        flex: 1,
        fontWeight: 'bold',
    },
    type: {
        color: 'gray',
        fontSize: 10,
        marginTop: 4.5
    },
    price: {
        fontSize: 10,
        color: 'green',
        marginTop: 2,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    sessionBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    sessionBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    sessionBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footertitle: {
        color: '#000',
        fontSize: 10,
        marginLeft: 5,
    },
})
export default MainCoursecard