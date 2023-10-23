import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
const About = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={{ uri: "https://mangoit-lms.mangoitsol.com/Images/sideImages/aboutUs.jpg" }} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.title}>About Us</Text>
                    <Text style={styles.aboutparagraph}>React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project.</Text>
                </View>
                <View>
                    <Text style={styles.title}>Our Mission</Text>
                    <Text style={styles.aboutparagraph}>React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration.</Text>
                </View>
                <View>
                    <Text style={styles.title}>Our Vission</Text>
                    <Text style={styles.aboutparagraph}>React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export { About }


