import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import { getSubscriptionDet } from '../../../services/subscriptionServices';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getEnrolledCourse } from '../../../services/courseServices';
import { SERVER_API_URL } from '../../../api/api';
import styles from './style';
const CourseDetails = () => {
    //authtoken login user det from redux
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const LoginUserData = useSelector(
        (state: any) => state?.setLoginUserReducer?.userDetail,
    );
    const [enrollCourse, setenrollCourse] = useState<any>([])
    //get enrolled courses
    const getCourses = async () => {
        const courData: any = await getEnrolledCourse(AuthToken, LoginUserData?.userDetails?.id);
        setenrollCourse(courData);
    }
    useEffect(() => {
        getCourses();
    }, [])


    const sections = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
            image: 'https://www.bootdey.com/image/500x500/6495ED/000000'
        },
        {
            title: 'sed do eiusmod tempor incididunt ut labore et dolore',
            content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eiu',
            image: 'https://www.bootdey.com/image/500x500/008B8B/000000'
        },
        {
            title: 'Duis aute irure dolor in reprehenderit',
            content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
            image: 'https://www.bootdey.com/image/500x500/FF00FF/000000'
        }
    ];
    const [activeSection, setActiveSection] = useState(null);

    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$50',
            images: [
                'https://www.bootdey.com/image/280x280/FF00FF/000000',
                'https://www.bootdey.com/image/280x280/EE82EE/000000',
                'https://www.bootdey.com/image/280x280/008080/000000',
                'https://www.bootdey.com/image/280x280/00FF7F/000000',
                'https://www.bootdey.com/image/280x280/87CEEB/000000',
                'https://www.bootdey.com/image/280x280/2E8B57/000000',
                'https://www.bootdey.com/image/280x280/FF00FF/000000',
            ]
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$100',
            images: [
                'https://www.bootdey.com/image/280x280/FF6347/000000',
                'https://www.bootdey.com/image/280x280/FF6347/000000',
                'https://www.bootdey.com/image/280x280/FF6347/000000',
                'https://www.bootdey.com/image/280x280/FF6347/000000',
                'https://www.bootdey.com/image/280x280/FF6347/000000',
                'https://www.bootdey.com/image/280x280/FF6347/000000',
                'https://www.bootdey.com/image/280x280/FF00FF/000000',
            ]
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$150',
            images: [
                'https://www.bootdey.com/image/280x280/FF00FF/000000',
                'https://www.bootdey.com/image/280x280/EE82EE/000000',
                'https://www.bootdey.com/image/280x280/008080/000000',
                'https://www.bootdey.com/image/280x280/00FF7F/000000',
                'https://www.bootdey.com/image/280x280/87CEEB/000000',
                'https://www.bootdey.com/image/280x280/2E8B57/000000',
                'https://www.bootdey.com/image/280x280/FF00FF/000000',
            ]
        },
    ]

    return (
        <ScrollView>
            <View style={styles.detcontainer}>
                <Text style={styles.dettitle}>Java</Text>
                <View style={styles.meta}>
                    <Text style={styles.author}>Type : Free, </Text>
                    <Text style={styles.date}>18 + Enrolled Students</Text>
                </View>
                <Image source={{ uri: 'https://api-mangoit-lms.mangoitsol.com/uploads/16893324979861555192.jpg' }} style={styles.image} />
                <Text style={styles.content}>Angular is a popular web development framework developed by Google. It is used for building dynamic web applications. Angular follows the Model-View-Controller (MVC) architectural pattern.</Text>
                <View style={styles.storyContainer}>
                    <Image style={styles.storyImage} source={{ uri: 'https://www.bootdey.com/image/580x580/008000/000000' }} />
                </View>
                <TouchableOpacity style={styles.shareButton} >
                    <Text style={styles.shareButtonText}>Start Course</Text>
                </TouchableOpacity>
                <View style={styles.coursedetbody}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>About This Course</Text>
                        <View style={styles.sectionContent}>
                            <View style={styles.sectionItem}>
                                <Text style={styles.sectionItemTitle}>
                                    Software Engineer, ABC Company (2022-present)
                                </Text>
                                <Text style={styles.sectionItemDesc}>
                                    - Worked on the development of the company's flagship product, a cloud-based project management tool
                                    - Implemented new features and improvements to the tool using React and Redux
                                    - Collaborated with the design team to ensure a seamless user experience
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text style={styles.sectionItemTitle}>
                                    Software Intern, XYZ Company (2020-2021)
                                </Text>
                                <Text style={styles.sectionItemDesc}>
                                    - Assisted the development team in the creation of a mobile app for event ticketing
                                    - Worked with React Native and Firebase to implement features such as ticket purchasing and QR code scanning
                                    - Participated in code reviews and team meetings to ensure code quality
                                </Text>
                            </View>
                            <View style={styles.detlistItem}>
                                <Text>dsfdsgfdsg</Text>
                                <Text>dsfdsgfdsg</Text>
                                <Text>dsfdsgfdsg</Text>
                                <Text>dsfdsgfdsg</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>What you'll learn</Text>
                        <View style={styles.sectionContent}>
                            <Text style={styles.sectionItem}>
                                B.S. in Computer Science, XYZ University
                            </Text>
                            <Text style={styles.sectionItem}>
                                M.S. in Computer Science, ABC University
                            </Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>This course includes:</Text>
                        <View style={styles.sectionContent}>
                            <View style={styles.sectionItem}>
                                <Text style={styles.sectionItemTitle}>
                                    Personal Blog (2021)
                                </Text>
                                <Text style={styles.sectionItemDesc}>
                                    - Created a personal blog using Gatsby and GraphQL
                                    - Implemented a custom design and added features such as dark mode and search
                                    - Deployed the site using AWS Amplify
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text style={styles.sectionItemTitle}>
                                    Recipe App (2020)
                                </Text>
                                <Text style={styles.sectionItemDesc}>
                                    - Developed a recipe search app using React and the Spoonacular API
                                    - Implemented features such as saving favorite recipes and filtering by dietary restrictions
                                    - Published the app on the App Store and Google Play Store
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.sectionTitle}>Related Courses</Text>
                    <View style={styles.relatedPostContainer}>
                        <Image source={{ uri: 'https://api-mangoit-lms.mangoitsol.com/uploads/16893324979861555192.jpg' }} style={styles.relatedPostImage} />
                        <Text style={styles.relatedPostTitle}>Java</Text>
                    </View>
                    <View style={styles.relatedPostContainer}>
                        <Image source={{ uri: 'https://api-mangoit-lms.mangoitsol.com/uploads/16893324979861555192.jpg' }} style={styles.relatedPostImage} />
                        <Text style={styles.relatedPostTitle}>Java</Text>
                    </View>
                    <Text style={styles.sectionTitle}>Course content</Text>
                    <View style={styles.meta}>
                        <Text style={styles.author}>Type : Free, </Text>
                        <Text style={styles.date}>18 + Enrolled Students</Text>
                    </View>
                    <View style={styles.accordionContainer}>
                        {sections.map((section, index: any) => (
                            <View key={index}>
                                <TouchableOpacity
                                    style={styles.titleContainer}
                                    onPress={() => setActiveSection(index)}
                                >
                                    <Text style={styles.title}>{section.title}</Text>
                                </TouchableOpacity>
                                {activeSection === index && (
                                    <View style={styles.contentContainer}>
                                        <Text style={styles.content}>{section.content}</Text>
                                        <Image style={styles.sectionImage} source={{ uri: section.image }} />
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                    <View style={styles.pricingOption}>
                        <Text style={styles.pricingOptionTitle}>Basic</Text>
                        <Text style={styles.pricingOptionPrice}>$10/month</Text>
                        <Text style={styles.pricingOptionDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                        <View style={styles.pricingOptionFeatures}>
                            <Text style={styles.pricingOptionFeature}>1 user</Text>
                            <Text style={styles.pricingOptionFeature}>10GB storage</Text>
                            <Text style={styles.pricingOptionFeature}>Basic support</Text>
                        </View>
                        <View style={styles.pricingOptionButtonContainer}>
                            <Text style={styles.pricingOptionButton}>Choose Plan</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={products}
                    renderItem={({ item: product }) => (
                        <View style={styles.carde} >
                            <View style={styles.cardContente}>
                                <ScrollView horizontal style={styles.imagesContent}>
                                    {product.images.map((image, index) => (
                                        <TouchableOpacity onPress={() => { }} key={`${product.id}_${index}`}>
                                            <Image style={styles.productImage} source={{ uri: image }} />
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productPrice}>{product.price}</Text>
                            </View>
                            <View style={styles.cardActions}>
                                <TouchableOpacity style={styles.button} onPress={() => { }}>
                                    <Text style={styles.buttonText}>Add to Cart</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => { }}>
                                    <Text style={styles.buttonText}>More Details</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => { }}>
                                    <Text style={styles.buttonText}>Wish List</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
                
            </View>
        </ScrollView>
    );
};
export default CourseDetails;
