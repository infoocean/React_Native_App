import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { getSubscriptionDet } from '../../../services/subscriptionServices';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getEnrolledCourse, getTopEnrolledCourse } from '../../../services/courseServices';
import { SERVER_API_URL } from '../../../api/api';
import { formateAmount } from '../../../commonFunctions/fommonFn';
import Icon from 'react-native-vector-icons/Entypo'
const Userdashboard = ({ navigation }: any) => {
    //authtoken login user det from redux
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const LoginUserData = useSelector(
        (state: any) => state?.setLoginUserReducer?.userDetail,
    );
    const [SubsDet, setSubsDet] = useState<any>([])
    const [enrollCourse, setenrollCourse] = useState<any>([])
    const [topenrollCourse, settopenrollCourse] = useState<any>([])
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
    //get Top enrolled courses
    const getTopEnrolledCourses = async () => {
        const enrolledcourData: any = await getTopEnrolledCourse(AuthToken);
        settopenrollCourse(enrolledcourData);
    }
    useEffect(() => {
        getSubsdet();
        getCourses();
        getTopEnrolledCourses();
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.subCardSection}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Active Subscriptions</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Subscriptions')}>
                            <Icon
                                style={styles.allBtn}
                                name='chevron-small-right'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subcard}>
                        <TouchableOpacity onPress={() => navigation.navigate('SubscriptionDetails', {
                            paramName: `${SubsDet?.id}`,
                        })}>
                            <View style={styles.cardInfoContainer}>
                                <Image source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/bell1.png' }} style={styles.logo} />
                                <Text style={styles.cardTitle}>{SubsDet?.name}</Text>
                                <Text style={styles.cardTitle}>${formateAmount(SubsDet?.price)}</Text>
                            </View>
                            <View style={styles.cardInfoContainer1}>
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
                <View style={styles.courSection}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Enrolled Courses</Text>
                        <TouchableOpacity>
                            <Icon
                                style={styles.allBtn}
                                name='chevron-small-right'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={enrollCourse}
                        horizontal={false}
                        numColumns={2}
                        renderItem={course => {
                            const item = course?.item?.course?.course
                            return (
                                <TouchableOpacity style={styles.coursecard} onPress={() => navigation.navigate('Course Details')}>
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
                </View>
                <View style={styles.TopEnrolledcourSection}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Top Enrolled Courses</Text>
                        <TouchableOpacity>
                            <Icon
                                style={styles.allBtn}
                                name='chevron-small-right'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.TopEnrolledcard}>
                        <View style={styles.TopEnrolledcardContent}>
                            <FlatList
                                data={topenrollCourse}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <ScrollView horizontal>
                                        <TouchableOpacity style={styles.cardcontent}>
                                            <Image style={styles.productImage} source={{ uri: `${SERVER_API_URL}/${item.image}` }} />
                                            <View style={styles.coursecnt}>
                                                <Text style={styles.title1}>{item.title}</Text>
                                                <Text style={{ marginTop: 1, textAlign: 'center' }}>Enroll Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ScrollView>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                            /></View>
                    </View>
                </View>
                <View style={styles.TopFreecourSection}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Top Free Courses</Text>
                        <TouchableOpacity>
                            <Icon
                                style={styles.allBtn}
                                name='chevron-small-right'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.TopEnrolledcard}>
                        <View style={styles.TopEnrolledcardContent}>
                            <FlatList
                                data={topenrollCourse}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <ScrollView horizontal>
                                        <TouchableOpacity style={styles.cardcontent}>
                                            <Image style={styles.productImage} source={{ uri: `${SERVER_API_URL}/${item.image}` }} />
                                            <View style={styles.coursecnt}>
                                                <Text style={styles.title1}>{item.title}</Text>
                                                <Text style={{ marginTop: 1, textAlign: 'center' }}>Enroll Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ScrollView>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                            /></View>
                    </View>
                </View>
                <View style={styles.TopFreecourSection}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Top Paid Courses</Text>
                        <TouchableOpacity>
                            <Icon
                                style={styles.allBtn}
                                name='chevron-small-right'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.TopEnrolledcard}>
                        <View style={styles.TopEnrolledcardContent}>
                            <FlatList
                                data={topenrollCourse}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <ScrollView horizontal>
                                        <TouchableOpacity style={styles.cardcontent}>
                                            <Image style={styles.productImage} source={{ uri: `${SERVER_API_URL}/${item.image}` }} />
                                            <View style={styles.coursecnt}>
                                                <Text style={styles.title1}>{item.title}</Text>
                                                <Text style={{ marginTop: 1, textAlign: 'center' }}>Enroll Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ScrollView>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                            /></View>
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
