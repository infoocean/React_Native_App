import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { getSubscriptionDet } from '../../../services/subscriptionServices';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { SERVER_API_URL } from '../../../api/api';
const UserSubscription = () => {
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
    return (
        <ScrollView>
            <View style={styles.subcontainer}>
                <View style={styles.subCard}>
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
                </View>
            </View>
        </ScrollView>
    );
};
export default UserSubscription;
