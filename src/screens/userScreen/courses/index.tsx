import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { getEnrolledCourse } from '../../../services/courseServices'; import { SERVER_API_URL } from '../../../api/api';
const UserEnrolledCourses = ({ navigation }: any) => {
    //authtoken login user det from redux
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const LoginUserData = useSelector(
        (state: any) => state?.setLoginUserReducer?.userDetail,
    );
    const [enrollCourse, setenrollCourse] = useState<any>([])
    //get enrolled courses
    const getCourses = async () => {
        const courData: any = await getEnrolledCourse(AuthToken, LoginUserData?.userDetails?.id);
        setenrollCourse(courData);
    }
    useEffect(() => {
        getCourses();
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>All Enrolled Courses</Text>
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={enrollCourse}
                horizontal={false}
                numColumns={2}
                ItemSeparatorComponent={() => {
                    return <View style={styles.separator} />
                }}
                renderItem={course => {
                    const item = course?.item?.course?.course
                    return (
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Course Details')}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.cardImage} source={{ uri: `${SERVER_API_URL}/${item?.image}` }} />
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.subtitle}>Type : {item.is_chargeable} </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};
export default UserEnrolledCourses;
