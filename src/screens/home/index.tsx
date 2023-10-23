import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { PricingCard } from 'react-native-elements';
import { styles } from './style';
import CarouselSlider from '../../components/homeScreenCmp/carouselSlider';

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
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        {/*carousel slider component*/}
        <CarouselSlider />
        {/*how it works component*/}
        <View style={styles.howitworkscontainer}>
          <Text style={styles.title}>How It Works ?</Text>
          <View style={styles.iconcontainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' }}
              />
              <Text style={styles.subtitle}>Sign Up</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' }}
              />
              <Text style={styles.subtitle}>Select Courses</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' }}
              />
              <Text style={styles.subtitle}>Start Learning</Text>
            </View>
          </View>
        </View>
        {/*Top Enrolled Courses*/}
        <View style={styles.topenrolledcourses}>
          <Text style={styles.title}>Top Enrolled Courses</Text>
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
        </View>
        {/*top free courses*/}
        <View style={styles.topenrolledcourses}>
          <Text style={styles.title}>Top Free Courses</Text>
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
        </View>
        {/*top paid courses*/}
        <View style={styles.topenrolledcourses}>
          <Text style={styles.title}>Top Paid Courses</Text>
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
        </View>
        {/*our subscription plan*/}
        <View style={styles.topenrolledcourses}>
          <Text style={styles.title}>Our Subscription plan</Text>
          <View style={styles.container}>
            <PricingCard
              color="black"
              title="Basic Plan"
              price="$200"
              info={['1 User', 'Basic Support', 'All Core Features']}
              button={{ title: 'Subscribe Now', icon: 'flight-takeoff' }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >


  );
};

export default Home;
