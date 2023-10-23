import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../services/usersServices';
import { capitalizeFirstLetter } from '../../commonFunctions/fommonFn';
import { SERVER_API_URL } from '../../api/api';
import Icon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {
    //get authtoken and login user det from redux store
    const LoginUserData = useSelector((state: any) => state?.setLoginUserReducer?.userDetail);
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const [userDetails, setuserDetails] = useState<any>([]);
    //get user details
    const getUserDet = async () => {
        const user = await getUserDetails(AuthToken, LoginUserData?.userDetails?.id);
        setuserDetails(user)
    }
    useEffect(() => {
        getUserDet()
    }, [])
    return (

        <View style={styles.container}>
            <Image
                source={{ uri: 'https://t4.ftcdn.net/jpg/03/29/19/15/360_F_329191596_tRQiV7LZjTZtuPM09QyOS09HV1D9VimE.jpg' }}
                style={styles.coverImage}
            />
            <View style={styles.avatarContainer}>
                {userDetails?.profile_pic ?
                    <>
                        <Image
                            source={{ uri: `${SERVER_API_URL + "/" + userDetails?.profile_pic}` }}
                            style={styles.avatar}
                        />
                        <View style={styles.iconstyle}>
                            <Icon name='edit' size={19} color="#fff" style={{ padding: 11 }} />
                        </View>
                    </>
                    :
                    <View style={styles.avatarContainer1}>
                        {userDetails &&
                        <>
                            <Text style={styles.avatar1}>
                                {capitalizeFirstLetter(userDetails?.first_name) + capitalizeFirstLetter(userDetails?.last_name)}
                            </Text>
                             <View style={styles.iconstyle1}>
                             <Icon name='edit' size={19} color="#fff" style={{ padding: 11 }} />
                         </View>
                         </>
                        }
                    </View>
                }
                <Text style={styles.name}>Hi, {userDetails?.first_name}</Text>
                <Text style={styles.role}>{userDetails?.role_id === 2 ? "Learner" : "Admin"}</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>First Name :</Text>
                    <Text style={styles.infoValue}>{userDetails?.first_name}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Last Name :</Text>
                    <Text style={styles.infoValue}>{userDetails?.last_name}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Email :</Text>
                    <Text style={styles.infoValue}>{userDetails?.email}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Role :</Text>
                    <Text style={styles.infoValue}>{userDetails?.role_id === 2 ? "Learner" : "Admin"}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}
            //onPress={handleEditPress}
            >
                <Text style={styles.buttonText}>EDIT PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}
            //onPress={handleEditPress}
            >
                <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
            </TouchableOpacity>
        </View>

    );
};



export default ProfileScreen;