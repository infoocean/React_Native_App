import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import F5Icon from 'react-native-vector-icons/FontAwesome5'
import EIcon from 'react-native-vector-icons/Entypo'
import IoIcon from 'react-native-vector-icons/Ionicons'
import AIcon from 'react-native-vector-icons/AntDesign'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginUser } from '../Redux/actions/authActions';
import Admindashboard from '../screens/adminScreen/dashboard';
import ProfileScreen from '../screens/profile';
import UsersScreen from '../screens/adminScreen/users';
import AllCoursesScreen from '../screens/adminScreen/courses/allCourses';
import AllModuleScreen from '../screens/adminScreen/courses/allModules';
import AllSessionsScreen from '../screens/adminScreen/courses/allSessions';
import AllSubscriptionScreen from '../screens/adminScreen/subscriptions/allSubscriptions';
import SubscriptionPlansScreen from '../screens/adminScreen/subscriptions/subscriptionPlans';
import InvoicesScreen from '../screens/adminScreen/subscriptions/invoices';
import AvatarImg from '../components/avatarImgCmp/avatarImg';
import { SERVER_API_URL } from '../api/api';
import NavRighrtheader from '../components/NavigationHeaderCmp/NavHeader';
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" component={Admindashboard}
        options={() => ({
          headerRight: () =>
            <NavRighrtheader identifier={'admin'} />,
        })} />
      <Drawer.Screen name="Profile" component={ProfileScreen}
        options={({ navigation }) => ({
          headerRight: () =>
            <NavRighrtheader identifier={'admin'} />,

        })}
      />
      <Drawer.Screen name="Users" component={UsersScreen}
        options={({ navigation }) => ({
          headerRight: () =>
            <NavRighrtheader identifier={'admin'} />,
        })}
      />
      <Drawer.Screen name="Courses" component={AllCoursesScreen} />
      <Drawer.Screen name="Modules" component={AllModuleScreen} />
      <Drawer.Screen name="Sessions" component={AllSessionsScreen} />
      <Drawer.Screen name="Subscriptions" component={AllSubscriptionScreen} />
      <Drawer.Screen name="Subscription Plans" component={SubscriptionPlansScreen} />
      <Drawer.Screen name="Invoices" component={InvoicesScreen} />
    </Drawer.Navigator>
  );
};
export default AppNavigator;

const DrawerContent = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [isCourseSubMenuOpen, setisCourseSubMenuOpen] = React.useState<any>(false);
  const [isSubscriptionsSubMenuOpen, setisSubscriptionsSubMenuOpen] = React.useState<any>(false);
  const [isConfigrationsSubMenuOpen, setisConfigrationsSubMenuOpen] = React.useState<any>(false);
  const toggleCourseSubMenu = () => {
    setisCourseSubMenuOpen(!isCourseSubMenuOpen);
  };
  const toggleSubscriptionSubMenu = () => {
    setisSubscriptionsSubMenuOpen(!isSubscriptionsSubMenuOpen);
  };
  const toggleConfigrationSubMenu = () => {
    setisConfigrationsSubMenuOpen(!isConfigrationsSubMenuOpen);
  };
  const handleLogout = () => {
    dispatch(setLoginUser(""))
  }
  const LoginUserData = useSelector((state: any) => state?.setLoginUserReducer?.userDetail?.userDetails);

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <View>
          {LoginUserData?.profile_pic !== null ? (<Image source={{ uri: `${SERVER_API_URL + "/" + LoginUserData?.profile_pic}` }} style={styles.userPhoto} />) : <AvatarImg firstName={LoginUserData?.first_name} lastName={LoginUserData?.last_name} />}
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Hi, {LoginUserData?.first_name}</Text>
          <Text style={styles.userFollowers}>{LoginUserData?.role_id === 1 ? "Admin" : "User"}</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Profile')}>
          <F5Icon name="edit" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.normaldrawerItem}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Icon name="dashboard" size={24} />
          <Text style={styles.drawerText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.normaldrawerItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <FIcon name="user" size={24} />
          <Text style={styles.drawerText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.normaldrawerItem}
          onPress={() => navigation.navigate('Users')}
        >
          <FIcon name="users" size={24} />
          <Text style={styles.drawerText}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdowndrawerItem} onPress={toggleCourseSubMenu}>
          <View style={styles.iconItemName}>
            <Icon name="my-library-books" size={24} />
            <Text style={styles.drawerText}>Courses</Text>
          </View>
          {isCourseSubMenuOpen ? (<EIcon name="chevron-up" size={24} />) : (<EIcon name="chevron-down" size={24} />)}
        </TouchableOpacity >
        {isCourseSubMenuOpen && (
          <View style={styles.subMenu}>
            <TouchableOpacity
              style={styles.subMenuItem}
              onPress={() => navigation.navigate('Courses')}
            >
              <View style={styles.iconSubItemName}>
                <IoIcon name="library" size={24} />
                <Text style={styles.subMenuText}>All Courses</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subMenuItem}
              onPress={() => navigation.navigate('Modules')}
            >
              <View style={styles.iconSubItemName}>
                <Icon name="view-module" size={24} />
                <Text style={styles.subMenuText}>All Modules</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subMenuItem}
              onPress={() => navigation.navigate('Sessions')}
            >
              <View style={styles.iconSubItemName}>
                <AIcon name="copy1" size={24} />
                <Text style={styles.subMenuText}>All Sessions</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subMenuItem}
              onPress={() => navigation.navigate('Sessions')}
            >
              <View style={styles.iconSubItemName}>
                <Icon name="live-tv" size={24} />
                <Text style={styles.subMenuText}>Live Sesions</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.dropdowndrawerItem} onPress={toggleSubscriptionSubMenu}>
          <View style={styles.iconItemName}>
            <Icon name="subscriptions" size={24} />
            <Text style={styles.drawerText}>Subscriptions</Text>
          </View>
          {isSubscriptionsSubMenuOpen ? (<EIcon name="chevron-up" size={24} />) : (<EIcon name="chevron-down" size={24} />)}
        </TouchableOpacity>
        {
          isSubscriptionsSubMenuOpen && (
            <View style={styles.subMenu}>
              <TouchableOpacity
                style={styles.subMenuItem}
                onPress={() => navigation.navigate('Subscriptions')}
              >
                <View style={styles.iconSubItemName}>
                  <FIcon name="vcard" size={24} />
                  <Text style={styles.subMenuText}>All Subscriptions</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subMenuItem}
                onPress={() => navigation.navigate('Subscription Plans')}
              >
                <View style={styles.iconSubItemName}>
                  <FIcon name="plane" size={24} />
                  <Text style={styles.subMenuText}>Subscriptions Plans</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subMenuItem}
                onPress={() => navigation.navigate('Invoices')}
              >
                <View style={styles.iconSubItemName}>
                  <FIcon name="file-pdf-o" size={24} />
                  <Text style={styles.subMenuText}>Invoices</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }
        <TouchableOpacity style={styles.dropdowndrawerItem} onPress={toggleConfigrationSubMenu}>
          <View style={styles.iconItemName}>
            <EIcon name="line-graph" size={24} />
            <Text style={styles.drawerText}>Configurations</Text>
          </View>
          {isConfigrationsSubMenuOpen ? (<EIcon name="chevron-up" size={24} />) : (<EIcon name="chevron-down" size={24} />)}
        </TouchableOpacity>
        {
          isConfigrationsSubMenuOpen && (
            <View style={styles.subMenu}>
              <TouchableOpacity
                style={styles.subMenuItem}
                onPress={() => navigation.navigate('Category1')}
              >
                <View style={styles.iconSubItemName}>
                  <Icon name="email" size={24} />
                  <Text style={styles.subMenuText}>Email Configurations</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subMenuItem}
                onPress={() => navigation.navigate('Category2')}
              >
                <View style={styles.iconSubItemName}>
                  <AIcon name="earth" size={24} />
                  <Text style={styles.subMenuText}>Site Configurations</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subMenuItem}
                onPress={() => navigation.navigate('Category2')}
              >
                <View style={styles.iconSubItemName}>
                  <Icon name="payment" size={24} />
                  <Text style={styles.subMenuText}>Payment Configurations</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }
        <TouchableOpacity
          style={styles.normaldrawerItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="chat" size={24} />
          <Text style={styles.drawerText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.normaldrawerItem}
          onPress={handleLogout}
        >
          <Icon name="logout" size={24} />
          <Text style={styles.drawerText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View >
  );
};
export { DrawerContent };
export function Drawernavigation() {
  return (
    <AppNavigator />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#e8661b',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  normaldrawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  dropdowndrawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    justifyContent: 'space-between'
  },
  iconItemName: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  iconSubItemName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15
  },

  drawerText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#000"
  },
  subMenu: {
    marginLeft: 30,
  },
  subMenuItem: {
    padding: 10,
  },
  subMenuText: {
    fontSize: 16,
    marginLeft: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "black",
    elevation: 1
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  userFollowers: {
    color: '#999',
  },
  editButton: {
    paddingRight: 10
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
