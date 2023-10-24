import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { getSubscriptionDet } from '../../../services/subscriptionServices';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getEnrolledCourse } from '../../../services/courseServices';
import { SERVER_API_URL } from '../../../api/api';
const Userdashboard = ({ navigation }: any) => {
    //authtoken login user det from redux
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const LoginUserData = useSelector(
        (state: any) => state?.setLoginUserReducer?.userDetail,
    );
    const [SubsDet, setSubsDet] = useState<any>([])
    const [enrollCourse, setenrollCourse] = useState<any>([])
    //get subscription det
    const getSubsdet = async () => {
        const subscdet: any = await getSubscriptionDet(LoginUserData?.userDetails?.id);
        setSubsDet(subscdet[0])
    }
    //get enrolled courses
    const getCourses = async () => {
        const courData: any = await getEnrolledCourse(AuthToken, LoginUserData?.userDetails?.id);
        setenrollCourse(courData);
    }
    useEffect(() => {
        getSubsdet();
        getCourses();
    }, [])
    return (
        <ScrollView>
            <View style={styles.subcontainer}>
                <View style={styles.subCard}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Active Subscriptions</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Subscriptions')}>
                            <Text style={styles.allBtn} >All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subcardContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('SubscriptionDetails', {
                            paramName: `${SubsDet?.id}`,
                        })}>
                            <View style={styles.cardInfoContainer}>
                                <Image source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/bell1.png' }} style={styles.logo} />
                                <Text style={styles.cardNumber}>${SubsDet?.price}</Text>
                            </View>
                            <Text style={styles.cardNumber}>{SubsDet?.name}</Text>
                            <View style={styles.cardInfoContainer}>
                                <View style={styles.cardInfoItem}>
                                    <Text style={styles.cardInfoLabel}>Activation date</Text>
                                    <Text style={styles.cardInfoValue}>{moment(SubsDet?.start_date).format("MMM-DD-yyyy")}</Text>
                                </View>
                                <View style={styles.cardInfoItem}>
                                    <Text style={styles.cardInfoLabel}>Expiry Date</Text>
                                    <Text style={styles.cardInfoValue}>{moment(SubsDet?.expiry_date).format("MMM-DD-yyyy")}</Text>
                                </View>
                                <View style={styles.cardInfoItem}>
                                    <Text style={styles.cardInfoLabel}>Duration</Text>
                                    <Text style={styles.cardInfoValue}>{SubsDet?.duration_term}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.coursecontainer}>
                    <View style={styles.subCard}>
                        <View style={styles.titleWithLink}>
                            <Text style={styles.subTitle}>Enrolled Courses</Text>
                            <TouchableOpacity>
                                <Text style={styles.allBtn} onPress={() => navigation.navigate('Courses')} >All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            {enrollCourse.length > 0 ? enrollCourse.map((item: any, index: any) => {
                                return <TouchableOpacity key={index} style={styles.menuBox} onPress={() => navigation.navigate('Course Details')}>
                                    <Image
                                        style={styles.icon}
                                        source={{ uri: `${SERVER_API_URL + "/" + item?.course?.course?.image}` }}
                                    />
                                    <Text style={styles.info}>{item?.course?.course?.title}</Text>
                                    <Text style={styles.info1}>Type : {item?.course?.course?.is_chargeable}</Text>
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
export default Userdashboard;
