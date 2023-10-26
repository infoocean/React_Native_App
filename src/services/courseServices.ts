import {API} from '../api/api';
// get enrolled course by user id
const getEnrolledCourse = async (authtoken: string, userId: number) => {
  try {
    const response = await fetch(`${API.getCoursesByUserId}/${userId}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
    });
    const enrolledCoursejson = await response.json();
    return enrolledCoursejson;
  } catch (error) {
    return error;
  }
};

//get top enrolled courses
const getTopEnrolledCourse = async (authtoken: string) => {
  try {
    const response = await fetch(`${API.topenrolledcourses}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
    });
    const topenrolledCoursejson = await response.json();
    return topenrolledCoursejson;
  } catch (error) {
    return error;
  }
};

// //user Registration
// const userRegistration = async (token: any, payload: any) => {
//   try {
//     const response = await fetch(API.userRegistration, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(payload),
//     });
//     return await response;
//   } catch (error) {
//     return error;
//   }
// };

// //user login
// const userLogin = async (token: any, payload: any) => {
//   try {
//     const response = await fetch(API.userLogin, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(payload),
//     });
//     return await response;
//   } catch (error) {
//     return error;
//   }
// };

// //forgot password
// const forgotPassword = async (token: any, payload: any) => {
//   try {
//     const response = await fetch(API.forgotPassword, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(payload),
//     });
//     return await response;
//   } catch (error) {
//     return error;
//   }
// };

export {getEnrolledCourse, getTopEnrolledCourse};
