import {API} from '../api/api';
// get authorization token
const getAuthorizationToken = async () => {
  try {
    const response = await fetch(API.getAuthorizationToken);
    const json = await response.json();
    return json?.authToken;
  } catch (error) {
    return error;
  }
};

//user Registration
const userRegistration = async (token: any, payload: any) => {
  try {
    const response = await fetch(API.userRegistration, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    return await response;
  } catch (error) {
    return error;
  }
};

//user login
const userLogin = async (token: any, payload: any) => {
  try {
    const response = await fetch(API.userLogin, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    return await response;
  } catch (error) {
    return error;
  }
};

//forgot password
const forgotPassword = async (token: any, payload: any) => {
  try {
    const response = await fetch(API.forgotPassword, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    return await response;
  } catch (error) {
    return error;
  }
};

export {getAuthorizationToken, userRegistration, userLogin, forgotPassword};
