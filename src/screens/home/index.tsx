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

const matches = [
  {
    id: 1,
    avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    name: 'John Doe',
    age: '30',
  },
  {
    id: 2,
    avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    name: 'John Doe',
    age: '30',
  },
  {
    id: 3,
    avatar: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    name: 'John Doe',
    age: '30',
  },
  {
    id: 4,
    avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    name: 'John Doe',
    age: '30',
  },
  {
    id: 5,
    avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    name: 'John Doe',
    age: '30',
  }
]

const Home = () => {
  const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
  const [FreeCourses, setFreeCourses] = useState<any>([])
  const [PaidCourses, setPaidCourses] = useState<any>([])
  const [TopEnroledCourses, setTopEnroledCourses] = useState<any>([])
  //get all courses
  const getCourses = async () => {
    const courseData: any = await getAllCourse(AuthToken);
  }
  //get top enrolled Courses
  const getTopEnrolledCourses = async () => {
    const EnrolledcourseData: any = await getTopEnrolledCourse(AuthToken);
    setTopEnroledCourses(EnrolledcourseData)
  }
  useEffect(() => {
    getCourses();
    getTopEnrolledCourses();
  }, [])

  console.log(TopEnroledCourses, "fkj")

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
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              {TopEnroledCourses && TopEnroledCourses.length > 0 && TopEnroledCourses?.map(({ image, id, title, is_chargeable }: any) => (
                <View style={styles.sectionCard} key={id}>
                  <Image style={styles.sectionImage} source={{ uri: `${SERVER_API_URL}/${image}` }} />
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseTirle}>{title}</Text>
                    <Text style={styles.courseType}>Type: {is_chargeable}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        {/*top free courses*/}
        {/* <View style={styles.topenrolledcourses}>
          <HeaderTitle />
          <View style={styles.container}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>6 Courses Showing</Text>
                <TouchableOpacity style={styles.seeAllButton}>
                  <Text style={styles.seeAllButtonText}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <ScrollView horizontal contentContainerStyle={styles.sectionScroll}>
                  {matches.map(({ avatar, id, name, age }) => (
                    <View style={styles.sectionCard} key={id}>
                      <Image style={styles.sectionImage} source={{ uri: avatar }} />
                      <View style={styles.sectionInfo}>
                        <Text style={styles.sectionLabel}>{name}</Text>
                        <Text style={styles.sectionLabel}>Age: {age}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View> */}
        {/*top paid courses*/}
        {/* <View style={styles.topenrolledcourses}>
          <HeaderTitle />
          <View style={styles.container}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>6 Courses Showing</Text>
                <TouchableOpacity style={styles.seeAllButton}>
                  <Text style={styles.seeAllButtonText}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBody}>
                <ScrollView horizontal contentContainerStyle={styles.sectionScroll}>
                  {matches.map(({ avatar, id, name, age }) => (
                    <View style={styles.sectionCard} key={id}>
                      <Image style={styles.sectionImage} source={{ uri: avatar }} />
                      <View style={styles.sectionInfo}>
                        <Text style={styles.sectionLabel}>{name}</Text>
                        <Text style={styles.sectionLabel}>Age: {age}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View> */}
        {/*our subscription plan*/}
        {/* <View style={styles.topenrolledcourses}>
          <HeaderTitle />
          <View style={styles.container}>
            <PricingCard
              color="black"
              title="Basic Plan"
              price="$200"
              info={['1 User', 'Basic Support', 'All Core Features']}
              button={{ title: 'Subscribe Now', icon: 'flight-takeoff' }}
            />
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView >


  );
};

export default Home;
