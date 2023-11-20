// import React, { useEffect, useState } from 'react';
// import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import { styles } from './style';
// import CarouselSlider from '../../components/homeScreenCmp/CarouselSlider';
// import { TitleWithBottomLineComponent } from '../../components/homeScreenCmp/TitleWithBottomLineComponent';
// import { FatistoIcn, FontAwesome5Icn } from '../../components/IconsComponents/IconsCmp';
// import { TitleWithLinkComponent } from '../../components/homeScreenCmp/TitleWithLinkComponent';
// import { useSelector } from 'react-redux';
// import { getAllCourse, getTopEnrolledCourse } from '../../services/courseServices';
// import { SERVER_API_URL } from '../../api/api';
// import PriceCard from '../../components/Common/PriceCard';
// import { getSubscriptionsPlans } from '../../services/subscriptionServices';
// import {
//   Platform,
//   PermissionsAndroid,
//   NativeModules,
//   NativeEventEmitter,
// } from 'react-native';
// import BleManager from 'react-native-ble-manager';

// const BleManagerModule = NativeModules.BleManager;
// const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);

// //course card component
// export const CourseCard = (props: any) => {
//   return (
//     <ScrollView horizontal showsHorizontalScrollIndicator={false} >
//       {props?.data && props?.data.length > 0 && props?.data?.map((item: any, index: any) => (
//         <TouchableOpacity>
//           <View style={styles.sectionCard} key={index}>
//             <Image style={styles.sectionImage} source={{ uri: `${SERVER_API_URL}/${item?.image || item?.course?.image}` }} />
//             <View style={styles.courseInfo}>
//               <Text style={styles.courseTirle}>{item?.title || item?.course?.title}</Text>
//               <Text style={styles.courseType}>Type: {item?.is_chargeable || item?.course?.is_chargeable}</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   )
// }


// export const RenderItem = ({ peripheral }: any) => {
//   const { name, rssi, connected } = peripheral;
//   return (
//     <>
//       {name && (
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginBottom: 10,
//           }}>
//           <View style={styles.deviceItem}>
//             <Text style={styles.deviceName}>{name}</Text>
//             <Text style={styles.deviceInfo}>RSSI: {rssi}</Text>
//           </View>
//           <TouchableOpacity
//             // onPress={() =>
//             //   connected
//             //     ? disconnectFromPeripheral(peripheral)
//             //     : connectToPeripheral(peripheral)
//             // }
//             style={styles.deviceButton}>
//             <Text
//               style={[
//                 //styles.scanButtonText,
//                 { fontWeight: 'bold', fontSize: 16 },
//               ]}>
//               {connected ? 'Disconnect' : 'Connect'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </>
//   );
// };

// const DeviceList = ({ peripheral, connect, disconnect }: any) => {
//   const { name, rssi, connected } = peripheral;
//   return (
//     <>
//       {name && (
//         <View style={styles.deviceContainer}>
//           <View style={styles.deviceItem}>
//             <Text style={styles.deviceName}>{name}</Text>
//             <Text style={styles.deviceInfo}>RSSI: {rssi}</Text>
//           </View>
//           <TouchableOpacity
//             onPress={() =>
//               connected ? disconnect(peripheral) : connect(peripheral)
//             }
//             style={styles.deviceButton}>
//             <Text
//               style={[
//                 //styles.scanButtonText,
//                 { fontWeight: 'bold', fontSize: 16 },
//               ]}>
//               {connected ? 'Disconnect' : 'Connect'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </>
//   );
// };



// const Home = () => {
//   const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
//   const [FreeCourses, setFreeCourses] = useState<any>([])
//   const [PaidCourses, setPaidCourses] = useState<any>([])
//   const [TopEnroledCourses, setTopEnroledCourses] = useState<any>([])
//   const [SubscriptionPlans, setSubscriptionPlans] = useState<any>([])
//   const peripherals = new Map();
//   const [isScanning, setIsScanning] = useState(false);
//   const [connectedDevices, setConnectedDevices] = useState<any>([]);
//   const [discoveredDevices, setDiscoveredDevices] = useState<any>([]);
//   //get all courses
//   const getCourses = async () => {
//     const courseData: any = await getAllCourse(AuthToken);
//     setFreeCourses(courseData.filter((item: any) => {
//       return item?.course?.is_chargeable === 'free';
//     }))
//     setPaidCourses(courseData.filter((item: any) => {
//       return item?.course?.is_chargeable === 'paid';
//     }))
//   }
//   //get top enrolled Courses
//   const getTopEnrolledCourses = async () => {
//     const EnrolledcourseData: any = await getTopEnrolledCourse(AuthToken);
//     setTopEnroledCourses(EnrolledcourseData)
//   }
//   //get subscriptionplans
//   const getSubscriptionPlans = async () => {
//     const plansData: any = await getSubscriptionsPlans(AuthToken);
//     setSubscriptionPlans(plansData[0])
//   }
//   useEffect(() => {
//     getCourses();
//     getTopEnrolledCourses();
//     getSubscriptionPlans();
//   }, [])

//   // const handleGetConnectedDevices = () => {
//   //   BleManager.getBondedPeripherals([]).then(results => {
//   //     for (let i = 0; i < results.length; i++) {
//   //       let peripheral = results[i];
//   //       peripheral.connected = true;
//   //       peripherals.set(peripheral.id, peripheral);
//   //       setConnectedDevices(Array.from(peripherals.values()));
//   //     }
//   //   });
//   // };

//   const getPer = async () => {
//     await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//       PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     ])
//   }

//   //bluethoth
//   useEffect(() => {
//     getPer();
//     BleManager.enableBluetooth().then(() => {
//       console.log('Bluetooth is turned on!');
//     });
//     BleManager.start({ showAlert: false }).then(() => {
//       console.log('BleManager initialized');
//     });
//     let stopDiscoverListener = BleManagerEmitter.addListener(
//       'BleManagerDiscoverPeripheral',
//       peripheral => {
//         peripherals.set(peripheral.id, peripheral);
//         setDiscoveredDevices(Array.from(peripherals.values()));
//       },
//     );
//     let stopConnectListener = BleManagerEmitter.addListener(
//       'BleManagerConnectPeripheral',
//       peripheral => {
//         console.log('BleManagerConnectPeripheral:', peripheral);
//       },
//     );
//     let stopScanListener = BleManagerEmitter.addListener(
//       'BleManagerStopScan',
//       () => {
//         setIsScanning(false);
//         console.log('scan stopped');
//       },
//     );
//     if (Platform.OS === 'android' && Platform.Version >= 23) {
//       PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       ).then(result => {
//         if (result) {
//           console.log('Permission is OK');
//         } else {
//           PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           ).then(result => {
//             if (result) {
//               console.log('User accepted');
//             } else {
//               console.log('User refused');
//             }
//           });
//         }
//       });
//     }
//     return () => {
//       stopDiscoverListener.remove();
//       stopConnectListener.remove();
//       stopScanListener.remove();
//     };



//   }, []);

//   const startScan = () => {
//     if (!isScanning) {
//       BleManager.scan([], 5, true)
//         .then(() => {
//           console.log('Scanning...');
//           setIsScanning(true);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   };

//   const connectToPeripheral = (peripheral: { id: string; connected: boolean; }) => {
//     BleManager.createBond(peripheral.id)
//       .then(() => {
//         peripheral.connected = true;
//         peripherals.set(peripheral.id, peripheral);
//         setConnectedDevices(Array.from(peripherals.values()));
//         setDiscoveredDevices(Array.from(peripherals.values()));
//         console.log('BLE device paired successfully');
//       })
//       .catch(() => {
//         console.log('failed to bond');
//       });
//   };

//   return (
//     <SafeAreaView style={styles.safeAreaView}>
//       <ScrollView>
//         <View>
//           <Text
//             style={{
//               fontSize: 18,
//               textAlign: 'center',
//             }}>
//             React Native BLE Manager
//           </Text>
//         </View>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={startScan}>
//           <Text style={styles.buttonTextStyle}>
//             {isScanning ? 'Scanning...' : 'Scan Bluetooth Devices'}
//           </Text>
//         </TouchableOpacity>
//         {discoveredDevices.length > 0 ? (
//           <FlatList
//             data={discoveredDevices}
//             renderItem={({ item }) => (
//               <DeviceList
//                 peripheral={item}
//                 connect={connectToPeripheral}
//               // disconnect={disconnectFromPeripheral}
//               />
//             )}
//             keyExtractor={item => item.id}
//           />
//         ) : (
//           <Text style={styles.noDevicesText}>No Bluetooth devices found</Text>
//         )}
//         {/*carousel slider component*/}
//         <CarouselSlider />
//         {/*how it works component*/}
//         <View style={styles.howitworkscontainer}>
//           <TitleWithBottomLineComponent headerTitle="How It Works ?" borderWidth="100" />
//           <View style={styles.Iconcircle}>
//             <View>
//               <View style={styles.iconarticle1}>
//                 <View style={styles.iconarcircle2}>
//                   <View style={styles.iconarcircle3}>
//                     <FatistoIcn name="locked" size="18" color="black" />
//                   </View>
//                 </View>
//               </View>
//               <Text style={styles.subtitle}>Sign Up</Text>
//             </View>
//             <View>
//               <View style={styles.iconarticle1}>
//                 <View style={styles.iconarcircle2}>
//                   <View style={styles.iconarcircle3}>
//                     <FontAwesome5Icn name="graduation-cap" size="18" color="black" />
//                   </View>
//                 </View>
//               </View>
//               <Text style={styles.subtitle}>Select Courses</Text>
//             </View>
//             <View>
//               <View style={styles.iconarticle1}>
//                 <View style={styles.iconarcircle2}>
//                   <View style={styles.iconarcircle3}>
//                     <FontAwesome5Icn name="book-reader" size="18" color="black" />
//                   </View>
//                 </View>
//               </View>
//               <Text style={styles.subtitle}>Start Learning</Text>
//             </View>
//           </View>
//         </View>
//         {/*Top Enrolled Courses*/}
//         <View style={styles.topenrolledcoursesContainer}>
//           <TitleWithBottomLineComponent headerTitle="Top Enrolled Courses" borderWidth="160" />
//           <View style={styles.topenrolledcoursesSection}>
//             <TitleWithLinkComponent title="6 Courses Showing" navigatioName="" />
//             <CourseCard data={TopEnroledCourses} />
//           </View>
//         </View>
//         {/*top free courses*/}
//         <View style={styles.topenrolledcoursesContainer}>
//           <TitleWithBottomLineComponent headerTitle="Top Free Courses" borderWidth="120" />
//           <View style={styles.topenrolledcoursesSection}>
//             <TitleWithLinkComponent title="6 Courses Showing" navigatioName="" />
//             <CourseCard data={FreeCourses} />
//           </View>
//         </View>
//         {/*top paid courses*/}
//         <View style={styles.topenrolledcoursesContainer}>
//           <TitleWithBottomLineComponent headerTitle="Top Paid Courses" borderWidth="120" />
//           <View style={styles.topenrolledcoursesSection}>
//             <TitleWithLinkComponent title="6 Courses Showing" navigatioName="" />
//             <CourseCard data={PaidCourses} />
//           </View>
//         </View>
//         {/*our subscription plan*/}
//         <View style={styles.topenrolledcoursesContainer}>
//           <TitleWithBottomLineComponent headerTitle="Our Subscription plan" borderWidth="140" />
//           <PriceCard plansdata={SubscriptionPlans} />
//         </View>
//       </ScrollView>
//     </SafeAreaView >
//   );
// };
// export default Home;


import React, { useState, useEffect } from 'react';
import {
  Text,
  Alert,
  View,
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView,
  NativeModules,
  useColorScheme,
  TouchableOpacity,
  NativeEventEmitter,
  PermissionsAndroid,
} from 'react-native';
import BleManager from 'react-native-ble-manager';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const BleManagerModule = NativeModules.BleManager;
const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);
export const DeviceList = ({ peripheral, connect, disconnect }: any) => {
  const { name, rssi, connected } = peripheral;
  return (
    <>
      {/* {name && ( */}
        <View style={styles.deviceContainer}>
          <View style={styles.deviceItem}>
            <Text style={styles.deviceName}>{name}</Text>
            <Text style={styles.deviceInfo}>RSSI: {rssi}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              connected ? disconnect(peripheral) : connect(peripheral)
            }
            style={styles.deviceButton}>
            <Text
              style={[
                styles.scanButtonText,
                { fontWeight: 'bold', fontSize: 16 },
              ]}>
              {connected ? 'Disconnect' : 'Connect'}
            </Text>
          </TouchableOpacity>
        </View>
      {/* )} */}
    </>
  );
};

const Home = () => {
  const peripherals = new Map();
  const [isScanning, setIsScanning] = useState(false);
  const [connectedDevices, setConnectedDevices] = useState<any>([]);
  const [discoveredDevices, setDiscoveredDevices] = useState<any>([]);

  // const handleGetConnectedDevices = () => {
  //   BleManager.getBondedPeripherals([]).then(results => {
  //     for (let i = 0; i < results.length; i++) {
  //       let peripheral: any = results[i];
  //       peripheral.connected = true;
  //       peripherals.set(peripheral.id, peripheral);
  //       setConnectedDevices(Array.from(peripherals.values()));
  //     }
  //   });
  // };

  console.log("kjhk", discoveredDevices)

  useEffect(() => {
    BleManager.enableBluetooth().then(() => {
      console.log('Bluetooth is turned on!');
    });
    BleManager.start({ showAlert: false }).then(() => {
      console.log('BleManager initialized');
      //handleGetConnectedDevices();
    });
    let stopDiscoverListener = BleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      peripheral => {
        peripherals.set(peripheral.id, peripheral);
        setDiscoveredDevices(Array.from(peripherals.values()));
      },
    );
    let stopConnectListener = BleManagerEmitter.addListener(
      'BleManagerConnectPeripheral',
      peripheral => {
        console.log('BleManagerConnectPeripheral:', peripheral);
      },
    );
    let stopScanListener = BleManagerEmitter.addListener(
      'BleManagerStopScan',
      () => {
        setIsScanning(false);
        console.log('scan stopped');
      },
    );
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(result => {
        if (!result) {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('Permission is OK');
            } else {
              console.log('User refused');
            }
          });
        }
      });
    }
    return () => {
      stopDiscoverListener.remove();
      stopConnectListener.remove();
      stopScanListener.remove();
    };
  }, []);

  const startScan = () => {
    if (!isScanning) {
      BleManager.scan([], 5, true)
        .then(() => {
          console.log('Scanning...');
          setIsScanning(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  // pair with device first before connecting to it
  const connectToPeripheral = (peripheral: { id: string; connected: boolean; }) => {
    BleManager.createBond(peripheral.id)
      .then(() => {
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        setConnectedDevices(Array.from(peripherals.values()));
        setDiscoveredDevices(Array.from(peripherals.values()));
        console.log('BLE device paired successfully');
      })
      .catch(() => {
        console.log('failed to bond');
      });
  };
  // disconnect from device
  const disconnectFromPeripheral = (peripheral: { id: string; connected: boolean; name: any; }) => {
    BleManager.removeBond(peripheral.id)
      .then(() => {
        peripheral.connected = false;
        peripherals.set(peripheral.id, peripheral);
        setConnectedDevices(Array.from(peripherals.values()));
        setDiscoveredDevices(Array.from(peripherals.values()));
        Alert.alert(`Disconnected from ${peripheral.name}`);
      })
      .catch(() => {
        console.log('fail to remove the bond');
      });
  };
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // render list of bluetooth devices
  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={[
            styles.title,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}>
          React Native BLE Manager Tutorial
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.scanButton}
          onPress={startScan}>
          <Text style={styles.scanButtonText}>
            {isScanning ? 'Scanning...' : 'Scan Bluetooth Devices'}
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.subtitle,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}>
          Discovered Devices: {discoveredDevices.length}
        </Text>
        {discoveredDevices.length > 0 ? (
          <FlatList
            data={discoveredDevices}
            renderItem={({ item }) => (
              <DeviceList
                peripheral={item}
                connect={connectToPeripheral}
                disconnect={disconnectFromPeripheral}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.noDevicesText}>No Bluetooth devices found</Text>
        )}
        <Text
          style={[
            styles.subtitle,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}>
          Connected Devices:
        </Text>
        {connectedDevices.length > 0 ? (
          <FlatList
            data={connectedDevices}
            renderItem={({ item }) => (
              <DeviceList
                peripheral={item}
                connect={connectToPeripheral}
                disconnect={disconnectFromPeripheral}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.noDevicesText}>No connected devices</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  scanButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  scanButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  noDevicesText: {
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deviceItem: {
    marginBottom: 10,
  },
  deviceName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  deviceInfo: {
    fontSize: 14,
  },
  deviceButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default Home;
