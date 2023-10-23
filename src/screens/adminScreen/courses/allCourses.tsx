import React, { useState } from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import IIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
const AllCoursesScreen = ({ navigation }: any) => {

    const data = [
        {
            id: 1,
            title: 'Product 1',
            price: '$ 25.00 USD',
            image: 'https://bootdey.com/image/400x200/FFB6C1/000000',
        },
        {
            id: 2,
            title: 'Product 2',
            price: '$ 10.13 USD',
            image: 'https://bootdey.com/image/400x200/FA8072/000000',
        },
        {
            id: 3,
            title: 'Product 3',
            price: '$ 12.12 USD',
            image: 'https://bootdey.com/image/400x200/87CEEB/000000',
        },
        {
            id: 4,
            title: 'Product 4',
            price: '$ 11.00 USD',
            image: 'https://bootdey.com/image/400x200/4682B4/000000',
        },
        {
            id: 5,
            title: 'Product 5',
            price: '$ 20.00 USD',
            image: 'https://bootdey.com/image/400x200/008080/000000',
        },
        {
            id: 6,
            title: 'Product 6',
            price: '$ 33.00 USD',
            image: 'https://bootdey.com/image/400x200/40E0D0/000000',
        },
        {
            id: 7,
            title: 'Product 7',
            price: '$ 20.95 USD',
            image: 'https://bootdey.com/image/400x200/EE82EE/000000',
        },
        {
            id: 8,
            title: 'Product 8',
            price: '$ 13.60 USD',
            image: 'https://bootdey.com/image/400x200/48D1CC/000000',
        },
        {
            id: 9,
            title: 'Product 9',
            price: '$ 15.30 USD',
            image: 'https://bootdey.com/image/400x200/191970/000000',
        },
        {
            id: 9,
            title: 'Product 10',
            price: '$ 21.30 USD',
            image: 'https://bootdey.com/image/400x200/7B68EE/000000',
        },
    ]

    const [products, setProducts] = useState(data)
    const [searchText, setSearchText] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(products)

    // const handleSearch = (text: any) => {
    //     setSearchText(text)
    //     const filtered = contacts.filter(contact => {
    //         return contact.name.toLowerCase().includes(text.toLowerCase())
    //     })
    //     setFilteredContacts(filtered)
    // }
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
            <View style={styles.coursecontainer}>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={products}
                    horizontal={false}
                    numColumns={2}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <View style={styles.card}>
                                <Image style={styles.cardImage} source={{ uri: item.image }} />
                                <View style={styles.cardHeader}>
                                    <View style={styles.coursenamesec}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </View>
                                    <View style={styles.coursenamesec}>
                                        <Text style={styles.title}>Free</Text>
                                    </View>
                                </View>
                                <View style={styles.cardFooter}>
                                    <View style={styles.sessionBarContainer}>
                                        <View style={styles.sessionBarSection}>
                                            <View style={styles.sessionBar}>
                                                <MIcon name='view-module' color={"#000"} size={15} />
                                                <Text style={styles.footertitle} >25 Modules</Text>
                                            </View>
                                        </View>
                                        <View style={styles.sessionBarSection}>
                                            <View
                                                style={styles.sessionBar}
                                            >
                                                <MIcon name='padding' color={"#000"} size={15} />
                                                <Text style={styles.footertitle}>25 Session</Text>
                                            </View>
                                        </View>
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
export default AllCoursesScreen;
