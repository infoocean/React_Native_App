import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IOIcon from 'react-native-vector-icons/Ionicons';
import EGIcon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements';
import { setLoginUser } from '../../Redux/actions/authActions';
import { useDispatch } from 'react-redux';
const NavRighrtheader = (props: any) => {
    const dispatch = useDispatch();
    const [openListDropdown, setopenListDropdown] = useState(false)
    const [openNotificationBox, setopenNotificationBox] = useState(false)
    const TogalListNavigation = () => {
        setopenListDropdown(!openListDropdown);
        setopenNotificationBox(false)
    }
    const TogalNotificationBox = () => {
        setopenNotificationBox(!openNotificationBox);
        setopenListDropdown(false)
    }
    const handleLogout = () => {
        setopenListDropdown(false);
        dispatch(setLoginUser(""))
    }
    const data = [
        { id: 1, description: 'Lorem ipsum dolor...' },
        { id: 2, description: 'Lorem ipsum dolor...' },
        { id: 3, description: 'Lorem ipsum dolor...' },
    ]
    return (
        <View style={styles.rightHeader}>
            <View>
                <IOIcon
                    name={props?.identifier ? "notifications-outline" : "notifications"}
                    //onPress={() => <custom action>}
                    color={props?.identifier ? '#181818' : 'white'}
                    size={23}
                    style={styles.Notificationicons}
                    onPress={TogalNotificationBox}
                />
                <Badge
                    status="primary"
                    containerStyle={{ position: 'absolute', top: 0, right: 26 }}
                />
            </View>
            {openNotificationBox ?
                <View style={styles.subMenuListBox}>
                    <FlatList
                        style={styles.notificationList}
                        data={data}
                        renderItem={({ item }: any) => {
                            return (
                                <TouchableOpacity>
                                    <View style={styles.notificationBox}>
                                        <FIcon
                                            name="hand-o-right"
                                            //onPress={() => <custom action>}
                                            color='black'
                                            size={23}
                                            style={styles.hsndicons}
                                        />
                                        <Text
                                            style={styles.description}
                                        >{item.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                : null
            }
            <EGIcon
                name="dots-three-vertical"
                //onPress={() => <custom action>}
                color={props?.identifier ? '#181818' : 'white'}
                style={styles.listicons}
                size={20}
                onPress={TogalListNavigation}
            />
            {
                openListDropdown ?
                    <View style={styles.subMenuListBox}>
                        <View style={styles.headerContainer}>
                            <View style={styles.profileContainer}>
                                <Image
                                    style={styles.profilePhoto}
                                    source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }}
                                />
                                <Text style={styles.nameText}>Hii, John Doe</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.statLabel}>Learner</Text>
                        </View>
                        <View style={styles.section}>
                            <TouchableOpacity style={styles.button}
                                onPress={handleLogout}
                            >
                                <View style={styles.Btnsection}>
                                    <MIcon
                                        name="logout"
                                        //onPress={() => <custom action>}
                                        color='white'
                                        size={20}
                                    />
                                    <Text style={styles.buttonText}>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null
            }
        </View >
    );
}
export default NavRighrtheader
const styles = StyleSheet.create({
    rightHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    Notificationicons: {
        marginRight: 25
    },
    listicons: {
        marginRight: 10
    },
    subMenuListBox: {
        position: "absolute",
        top: 27,
        right: 0,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        padding: 20
    },
    headerContainer: {
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 5,
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 75,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    },
    section: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 5,
        paddingHorizontal: 50,
    },
    statLabel: {
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#e8661b',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 15
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 5,
    },
    Btnsection: {
        flexDirection: 'row',
    },
    notificationList: {
        backgroundColor: "lightgray",
    },
    notificationBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'row',
    },
    description: {
        fontSize: 18,
        color: '#3498db',
        padding: 10,
    },
    hsndicons: {
        padding: 10,
    }
});
