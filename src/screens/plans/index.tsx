import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { styles } from './style';
import PriceCard from '../../components/Common/PriceCard';
import { TitleWithBottomLineComponent } from '../../components/homeScreenCmp/TitleWithBottomLineComponent';
import Bannercard from '../../components/Common/Bannercard';
import { useSelector } from 'react-redux';
import { getSubscriptionsPlans } from '../../services/subscriptionServices';

const Plans = () => {
  const AuthToken = useSelector((state: any) => state?.setLoginUserReducer?.token);
  const [SubscriptionPlans, setSubscriptionPlans] = useState<any>([])
  //get subscriptionplans
  const getSubscriptionPlans = async () => {
    const plansData: any = await getSubscriptionsPlans(AuthToken);
    setSubscriptionPlans(plansData[0])
  }
  useEffect(() => {
    getSubscriptionPlans();
  }, [])
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <Bannercard />
        <View style={{ marginTop: 20 }}>
          <TitleWithBottomLineComponent headerTitle="Our Subscription plan" borderWidth="150" />
          <PriceCard plansdata={SubscriptionPlans} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Plans;
