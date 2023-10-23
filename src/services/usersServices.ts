import {API} from '../api/api';
// get enrolled course by user id
const getUserDetails = async (authtoken: string, userId: number) => {
  try {
    const response = await fetch(`${API.userInfoById}/${userId}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
    });
    const userDetjson = await response.json();
    return userDetjson;
  } catch (error) {
    return error;
  }
};

//get users
const getUsers = async (authtoken: string) => {
  try {
    const response = await fetch(API.userAllUsers, {
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
export {getUsers, getUserDetails};
