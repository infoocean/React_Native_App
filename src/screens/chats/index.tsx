import React, { useState } from 'react'
import { FlatList, Image, Text, TextInput, View } from 'react-native'
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Chats({ navigation }: any) {

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
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredContacts}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() =>navigation.navigate('Chats Details')}>
                        <Image style={styles.image} source={{ uri: item.image }} />
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.phoneText}>{item.phone}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Chats