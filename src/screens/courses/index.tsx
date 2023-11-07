import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import IIcon from 'react-native-vector-icons/Ionicons'

import { useSelector } from 'react-redux';
import { getAllCourse } from '../../services/courseServices';
import MainCoursecard from '../../components/Common/MainCoursecard';
const Courses = () => {
    const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
    const [Courses, setCourses] = useState<any>([])
    //get all courses
    const getCourses = async () => {
        const courseData: any = await getAllCourse(AuthToken);
        setCourses(courseData);
    }
    useEffect(() => {
        getCourses();
    }, [])
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
                        placeholder="Search course..."
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity
                    style={styles.filterButton}
                >
                    <IIcon name='filter' color={"white"} size={22} style={[styles.icon, styles.iconBtnSearch]} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <MainCoursecard Courses={Courses} />
            </ScrollView>
        </SafeAreaView>
    );
};
export default Courses;
