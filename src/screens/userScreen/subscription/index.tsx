import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { getSubscriptionDet } from '../../../services/subscriptionServices';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { SERVER_API_URL } from '../../../api/api';
const UserSubscription = ({ navigation }: any) => {
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
    useEffect(() => {
        getSubsdet();
    }, [])

    const data = [
        { id: 1, day: 1, month: 'Sept, 2022' },
        { id: 2, day: 2, month: 'Jan' },
        { id: 3, day: 3, month: 'Aug' },
        { id: 4, day: 4, month: 'Dec' },
        { id: 5, day: 5, month: 'Jul' },
        { id: 6, day: 6, month: 'Oct' },
        { id: 7, day: 7, month: 'Sep' },
        { id: 8, day: 8, month: 'Jan' },
        { id: 9, day: 9, month: 'May' },
    ]
    const [eventList, setEventList] = useState(data)

    return (
        <ScrollView>
            <View style={styles.subcontainer}>
                <TouchableOpacity style={styles.subCard} onPress={() => navigation.navigate('Subscription Details')}>
                    <Text style={styles.subTitle}>Active Subscriptions</Text>
                    <View style={styles.subcardContainer}>
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
                    </View>
                </TouchableOpacity>
                <View style={styles.subCard}>
                    <FlatList
                        // enableEmptySections={true}
                        style={styles.eventList}
                        data={eventList}

                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <View style={styles.eventBox}>
                                        <View style={styles.eventDate}>
                                            <Text style={styles.eventDay}>{item.day}</Text>
                                            <Text style={styles.eventMonth}>{item.month}</Text>
                                        </View>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.eventTime}>10:00 am - 10:45 am</Text>
                                            <Text style={styles.userName}>John Doe</Text>
                                            <Text style={styles.description}>
                                                Lorem ipsum dolor sit amet, elit consectetur
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView >
    );
};
export default UserSubscription;
