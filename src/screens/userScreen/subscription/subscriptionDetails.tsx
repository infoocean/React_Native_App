import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { getSubscriptionDet } from '../../../services/subscriptionServices';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { SERVER_API_URL } from '../../../api/api';
const UserSubscriptionDetails = () => {
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

    const items = [
        {
            id: 1,
            name: 'Apples',
            price: 0.99,
            image: 'https://www.bootdey.com/image/280x280/FF00FF/000000',
        },
        {
            id: 2,
            name: 'Bananas',
            price: 0.79,
            image: 'https://www.bootdey.com/image/280x280/00BFFF/000000',
        },
        {
            id: 3,
            name: 'Bread',
            price: 2.99,
            image: 'https://www.bootdey.com/image/280x280/20B2AA/000000',
        },
    ]

    return (
        <ScrollView>
            <View style={styles.subcontainer}>
                <View style={styles.subCard}>
                    <Text style={styles.subTitle}>Subscriptions Details</Text>
                    <View style={styles.subcardContainer}>


                    </View>
                </View>
                <View style={styles.subCard}>
                    <Text style={styles.subTitle}>Order  Details</Text>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <View style={styles.item}>
                                    <Image source={{ uri: item.image }} style={styles.itemImage} />
                                    <View style={styles.itemContent}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                                    </View>
                                </View>
                                <View style={styles.buttons}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Add to Cart</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Add to Wishlist</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                                           />
                </View>
            </View>
        </ScrollView>
    );
};
export default UserSubscriptionDetails;
