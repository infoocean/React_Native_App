import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { getSubscriptionDet } from '../../../services/subscriptionServices';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getEnrolledCourse } from '../../../services/courseServices';
import { SERVER_API_URL } from '../../../api/api';
const CourseDetails = () => {
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
        <ScrollView>
            <View style={styles.subcontainer}>
                <View style={styles.coursecontainer}>
                    <View style={styles.subCard}>
                        <Text style={styles.subTitle}>Enrolled Courses</Text>
                        <View style={styles.container}>
                            {enrollCourse.length > 0 ? enrollCourse.map((item: any, index: any) => {
                                return <TouchableOpacity key={index} style={styles.menuBox}>
                                    <Image
                                        style={styles.icon}
                                        source={{ uri: `${SERVER_API_URL + "/" + item?.course?.course?.image}` }}
                                    />
                                    <Text style={styles.info}>{item?.course?.course?.title}</Text>
                                </TouchableOpacity>
                            }) : null}
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
export default CourseDetails;
