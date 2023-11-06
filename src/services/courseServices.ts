import {API} from '../api/api';
//get all courses
const getAllCourse = async (authtoken: string) => {
  try {
    const response = await fetch(`${API.getCourses}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
      body: JSON.stringify({
        is_chargeable: 0,
        status: 0,
      }),
    });
    return await response.json();
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

export {getAllCourse, getEnrolledCourse, getTopEnrolledCourse};
