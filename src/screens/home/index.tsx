import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { PricingCard } from 'react-native-elements';
import { styles } from './style';
import CarouselSlider from '../../components/homeScreenCmp/CarouselSlider';
import { TitleWithBottomLineComponent } from '../../components/homeScreenCmp/TitleWithBottomLineComponent';
import { FatistoIcn, FontAwesome5Icn } from '../../components/IconsComponents/IconsCmp';
import { TitleWithLinkComponent } from '../../components/homeScreenCmp/TitleWithLinkComponent';
import { useSelector } from 'react-redux';
import { getAllCourse, getTopEnrolledCourse } from '../../services/courseServices';
import { SERVER_API_URL } from '../../api/api';
import PriceCard from '../../components/Common/PriceCard';
import { getSubscriptionsPlans } from '../../services/subscriptionServices';

//course card component
export const CourseCard = (props: any) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {props?.data && props?.data.length > 0 && props?.data?.map((item: any, index: any) => (
        <TouchableOpacity>
          <View style={styles.sectionCard} key={index}>
            <Image style={styles.sectionImage} source={{ uri: `${SERVER_API_URL}/${item?.image || item?.course?.image}` }} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTirle}>{item?.title || item?.course?.title}</Text>
              <Text style={styles.courseType}>Type: {item?.is_chargeable || item?.course?.is_chargeable}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
const Home = () => {
  const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
  const [FreeCourses, setFreeCourses] = useState<any>([])
  const [PaidCourses, setPaidCourses] = useState<any>([])
  const [TopEnroledCourses, setTopEnroledCourses] = useState<any>([])
  const [SubscriptionPlans, setSubscriptionPlans] = useState<any>([])
  //get all courses
  const getCourses = async () => {
    const courseData: any = await getAllCourse(AuthToken);
    setFreeCourses(courseData.filter((item: any) => {
      return item?.course?.is_chargeable === 'free';
    }))
    setPaidCourses(courseData.filter((item: any) => {
      return item?.course?.is_chargeable === 'paid';
    }))
  }
  //get top enrolled Courses
  const getTopEnrolledCourses = async () => {
    const EnrolledcourseData: any = await getTopEnrolledCourse(AuthToken);
    setTopEnroledCourses(EnrolledcourseData)
  }
  //get subscriptionplans
  const getSubscriptionPlans = async () => {
    const plansData: any = await getSubscriptionsPlans(AuthToken);
    setSubscriptionPlans(plansData[0])
  }
  useEffect(() => {
    getCourses();
    getTopEnrolledCourses();
    getSubscriptionPlans();
  }, [])
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        {/*carousel slider component*/}
        <CarouselSlider />
        {/*how it works component*/}
        <View style={styles.howitworkscontainer}>
          <TitleWithBottomLineComponent headerTitle="How It Works ?" borderWidth="100" />
          <View style={styles.Iconcircle}>
            <View>
              <View style={styles.iconarticle1}>
                <View style={styles.iconarcircle2}>
                  <View style={styles.iconarcircle3}>
                    <FatistoIcn name="locked" size="18" color="black" />
                  </View>
                </View>
              </View>
              <Text style={styles.subtitle}>Sign Up</Text>
            </View>
            <View>
              <View style={styles.iconarticle1}>
                <View style={styles.iconarcircle2}>
                  <View style={styles.iconarcircle3}>
                    <FontAwesome5Icn name="graduation-cap" size="18" color="black" />
                  </View>
                </View>
              </View>
              <Text style={styles.subtitle}>Select Courses</Text>
            </View>
            <View>
              <View style={styles.iconarticle1}>
                <View style={styles.iconarcircle2}>
                  <View style={styles.iconarcircle3}>
                    <FontAwesome5Icn name="book-reader" size="18" color="black" />
                  </View>
                </View>
              </View>
              <Text style={styles.subtitle}>Start Learning</Text>
            </View>
          </View>
        </View>
        {/*Top Enrolled Courses*/}
        <View style={styles.topenrolledcoursesContainer}>
          <TitleWithBottomLineComponent headerTitle="Top Enrolled Courses" borderWidth="160" />
          <View style={styles.topenrolledcoursesSection}>
            <TitleWithLinkComponent title="6 Courses Showing" navigatioName="" />
            <CourseCard data={TopEnroledCourses} />
          </View>
        </View>
        {/*top free courses*/}
        <View style={styles.topenrolledcoursesContainer}>
          <TitleWithBottomLineComponent headerTitle="Top Free Courses" borderWidth="120" />
          <View style={styles.topenrolledcoursesSection}>
            <TitleWithLinkComponent title="6 Courses Showing" navigatioName="" />
            <CourseCard data={FreeCourses} />
          </View>
        </View>
        {/*top paid courses*/}
        <View style={styles.topenrolledcoursesContainer}>
          <TitleWithBottomLineComponent headerTitle="Top Paid Courses" borderWidth="120" />
          <View style={styles.topenrolledcoursesSection}>
            <TitleWithLinkComponent title="6 Courses Showing" navigatioName="" />
            <CourseCard data={PaidCourses} />
          </View>
        </View>
        {/*our subscription plan*/}
        <View style={styles.topenrolledcoursesContainer}>
          <TitleWithBottomLineComponent headerTitle="Our Subscription plan" borderWidth="140" />
          <PriceCard plansdata={SubscriptionPlans} />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};
export default Home;
