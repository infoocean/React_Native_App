import React from 'react'
import { PricingCard } from 'react-native-elements'
function PriceCard(props: any) {
    return (
        <PricingCard
            color={'#e8661b'}
            title={props?.plansdata?.title}
            price={"$" + props?.plansdata?.amount + "/Year"}
            info={['1 User', 'Basic Support', 'All features in basic plan', "Access all courses", "YAccess all modules", "Access all sessions"]}
            button={{ title: 'Subscribe Now', icon: 'flight-takeoff' }}
            titleStyle={{ fontSize: 20 }}
            pricingStyle={{ fontSize: 20, color: 'black' }}
        />
    )
}
export default PriceCard