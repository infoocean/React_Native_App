import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { TitleWithBottomLineComponent } from '../../components/homeScreenCmp/TitleWithBottomLineComponent'
import Bannercard from '../../components/Common/Bannercard'
const About = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <Bannercard />
                <View style={styles.aboutsec}>
                    <TitleWithBottomLineComponent headerTitle="About Us" borderWidth="100" />
                    <Text style={styles.aboutparagraph}>React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project.</Text>
                </View>
                <View>
                    <Text style={styles.title}></Text>
                    <TitleWithBottomLineComponent headerTitle="Our Mission" borderWidth="130" />
                    <Text style={styles.aboutparagraph}>React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration.</Text>
                </View>
                <View>
                    <TitleWithBottomLineComponent headerTitle="Our Vission" borderWidth="130" />
                    <Text style={styles.aboutparagraph}>React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project. Don't forget to browse our library of other free React Native templates for even more design and functionality inspiration. Happy coding!React Native example/template, blog post detail with comments and related posts! . Take a look at this UI example and see how it can enhance your project. You can copy or download the code and use it in your project.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export { About }


