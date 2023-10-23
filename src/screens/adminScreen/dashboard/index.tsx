import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import AIcon from 'react-native-vector-icons/AntDesign'
import { getAdmindashboardData } from '../../../services/dashboardServices';
import { useSelector } from 'react-redux';
import { formateAmount } from '../../../commonFunctions/fommonFn';
import { getUsers } from '../../../services/usersServices';
import { getSubscriptions } from '../../../services/subscriptionServices';
const Admindashboard = ({ navigation }: any) => {
    const [dashboard_data, set_dashboatd_data] = useState<any>([]);
    const [users_data, set_users_data] = useState<any>([]);
    const [subscriprions_data, set_subscriprions_data] = useState<any>([]);
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    useEffect(() => {
        dashboarddata();
        users();
        subascriptions();
    }, [])
    //get dashboard data
    const dashboarddata = async () => {
        const data = await getAdmindashboardData(AuthToken);
        set_dashboatd_data(data);
    }
    //get users data
    const users = async () => {
        const data = await getUsers(AuthToken);
        set_users_data(data.slice(0, 3));
    }
    //get subscriptions
    const subascriptions = async () => {
        const data = await getSubscriptions(AuthToken);
        set_subscriprions_data(data.slice(0, 3));
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <View>
                    <TouchableOpacity style={[styles.card, styles.usercardLeftWith]}>
                        <Image style={styles.image} source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/users.png' }} />
                        <View style={styles.cardContent}>
                            <Text style={styles.name}>Welcome Users</Text>
                            <Text style={styles.count}>{dashboard_data?.totalUsers}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, styles.coursecardLeftWith]}>
                        <Image style={styles.image} source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/course.png' }} />
                        <View style={styles.cardContent}>
                            <Text style={styles.name}>All Courses</Text>
                            <Text style={styles.count}>{dashboard_data?.totalCourses}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, styles.earningcardLeftWith]}>
                        <Image style={styles.image} source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/earning.png' }} />
                        <View style={styles.cardContent}>
                            <Text style={styles.name}>Total Earning</Text>
                            <Text style={styles.count}>${formateAmount(dashboard_data?.totalSubscriptionsPrice)}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, styles.subscriptioncardLeftWith]}>
                        <Image style={styles.image} source={{ uri: 'https://mangoit-lms.mangoitsol.com/Images/pages_icon/sub.png' }} />
                        <View style={styles.cardContent}>
                            <Text style={styles.name}>All Subscriptions</Text>
                            <Text style={styles.count}>{dashboard_data?.totalSubscriptions}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.subCard}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Today's Registered Users</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Users')}>
                            <Text style={styles.allBtn} >All</Text>
                        </TouchableOpacity>
                    </View>
                    {users_data && users_data.length > 0 ? users_data.map((item: any, key: any) => {
                        return (<View style={styles.UseritemContainer} key={key}>
                            <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} style={styles.userimage} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.username}>{item?.first_name}</Text>
                                <Text style={styles.useremail}>{item?.role_id === 1 ? "Admin" : "Learner"},  02,Jun,1999</Text>
                            </View>
                            <View style={styles.removeButton}>
                                <AIcon name='arrowright' color={"#0b57ed"} size={20} />
                            </View>
                        </View>)
                    }) : null}
                </View>
                <View style={styles.subCard}>
                    <View style={styles.titleWithLink}>
                        <Text style={styles.subTitle}>Today's Subscriptions</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Subscriptions')}>
                            <Text style={styles.allBtn} >All</Text>
                        </TouchableOpacity>
                    </View>
                    {subscriprions_data && subscriprions_data.length > 0 ? subscriprions_data.map((item: any, key: any) => {
                        return (<View style={styles.UseritemContainer} key={key}>
                            <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} style={styles.subscimage} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.username}>Shubham Kumar jaiswal</Text>
                                <Text style={styles.useremail}>{item?.name}</Text>
                                <Text style={styles.useremail}>${formateAmount(item?.price)}/{item?.duration_term}</Text>
                            </View>
                            <View style={styles.removeButton}>
                                <View style={styles.removeButton}>
                                    <AIcon name='arrowright' color={"#0b57ed"} size={20} />
                                </View>
                            </View>
                        </View>)
                    }) : null}
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};
export default Admindashboard;
