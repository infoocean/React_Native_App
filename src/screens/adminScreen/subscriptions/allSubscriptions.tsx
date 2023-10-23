import React, { useState } from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import IIcon from 'react-native-vector-icons/Ionicons'
import AIcon from 'react-native-vector-icons/AntDesign'
import MIcon from 'react-native-vector-icons/MaterialIcons'
const AllSubscriptionScreen = ({ navigation }: any) => {
    const data = [
        { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
        { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
        { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
        { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
        { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
        { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
        { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
        { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
        { id: 9, image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
        { id: 10, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    ]
    const [users, setUsers] = useState(data)
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.formContent}>
                <View style={styles.inputContainer}>
                    <Image
                        style={[styles.icon, styles.inputIcon]}
                        source={{ uri: 'https://img.icons8.com/color/70/000000/search.png' }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Search..."
                        underlineColorAndroid="transparent"
                    //onChangeText={name_address => setQuery({ name_address })}
                    />
                </View>
                <TouchableOpacity
                    style={styles.filterButton}
                //onPress={() => showAlert('search')}
                >
                    <IIcon name='filter' color={"white"} size={25} style={[styles.icon, styles.iconBtnSearch]} />
                </TouchableOpacity>
            </View>
            <View style={styles.paginationsec}>
                <Text style={styles.heading}>All (20)</Text>
                <View style={styles.paginationsec}>
                    <Text style={styles.prev}>Previous</Text>
                    <Text style={styles.next}>Next</Text>
                </View>
            </View>
            <View style={styles.subscontainer}>
                <FlatList
                    //enableEmptySections={true}
                    data={users}
                    //keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.subscCard}>
                                <View style={styles.subscHeader}>
                                    <Text style={styles.planename}>Basic Plan</Text>
                                    <Text style={styles.IssuDate}>Subscription Date : 02, jan 1999</Text>
                                </View>
                                <Text style={styles.subscPrice}>$200 / year</Text>
                                <View style={styles.subscHeader}>
                                    <View style={styles.userimg} >
                                        <Image source={{ uri: "https://bootdey.com/img/Content/avatar/avatar2.png" }} style={styles.postAvatar} />
                                        <Text style={styles.Username}>Shubham Kumar Jaiswal</Text>
                                    </View>
                                    <AIcon name='arrowright' color={"#0b57ed"} size={25} />
                                </View>
                                <View style={styles.postFooter}>
                                    <View style={styles.postButton}>
                                        <Text style={styles.poststatusText}>Status :  <Text style={styles.poststatus}>Active</Text></Text>
                                    </View>
                                    <View style={styles.postButton}>
                                        <Text style={styles.poststatusText}>Renue Date : 02, jan 2000</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView >
    );
};
export default AllSubscriptionScreen;
