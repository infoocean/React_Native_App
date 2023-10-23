import React, { useState } from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import IIcon from 'react-native-vector-icons/Ionicons'
import AIcon from 'react-native-vector-icons/AntDesign'
const UsersScreen = ({ navigation }: any) => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'John Doe',
            phone: '555-555-5555',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 2,
            name: 'Jane Smith',
            phone: '444-444-4444',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
            id: 3,
            name: 'Bobbie Doeman',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
            id: 4,
            name: 'Cabnth Johnson',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
            id: 5,
            name: 'Krekvh Martin',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
        },
        {
            id: 6,
            name: 'Jose Cassti',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
            id: 7,
            name: 'John Mrtiuhg',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
            id: 8,
            name: 'John Doe',
            phone: '555-555-5555',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 9,
            name: 'Jane Smith',
            phone: '444-444-4444',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
            id: 10,
            name: 'Bobbie Doeman',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
            id: 11,
            name: 'Cabnth Johnson',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
            id: 12,
            name: 'Krekvh Martin',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
        },
        {
            id: 13,
            name: 'Jose Cassti',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
            id: 14,
            name: 'John Mrtiuhg',
            phone: '333-333-3333',
            image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
        },
    ])
    const [searchText, setSearchText] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(contacts)

    const handleSearch = (text: any) => {
        setSearchText(text)
        const filtered = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(text.toLowerCase())
        })
        setFilteredContacts(filtered)
    }
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
            <View style={styles.usersSec}>
                <FlatList
                    data={filteredContacts}
                    renderItem={({ item }) => (
                        <View style={styles.UseritemContainer}>
                            <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} style={styles.userimage} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.username}>Shubham Kumar jaiswal</Text>
                                <Text style={styles.useremail}>sj2585097@gmail.com</Text>
                                <Text style={styles.userrole}>learner,  02,Jun,1999</Text>
                            </View>
                            <View style={styles.removeButton}>
                                <AIcon name='arrowright' color={"#0b57ed"} size={20} />
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView >
    );
};
export default UsersScreen;
