import {API} from '../api/api';
// get subscription details by user id
const getSubscriptionDet = async (userId: number) => {
  try {
    const response = await fetch(`${API.getSubscriptionDetails}/${userId}`);
    const subscDetjson = await response.json();
    return subscDetjson;
  } catch (error) {
    return error;
  }
};

// get subscriptions
const getSubscriptions = async (authtoken: string) => {
  try {
    const response = await fetch(API.getAllSubscription, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

//get subscription plans
const getSubscriptionsPlans = async (authtoken: string) => {
  try {
    const response = await fetch(API.getallsubscriptionsplans, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export {getSubscriptions, getSubscriptionDet, getSubscriptionsPlans};
