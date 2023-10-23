import {API} from '../api/api';
// get admin dashboard data
export const getAdmindashboardData = async (authtoken: string) => {
  try {
    const response = await fetch(`${API.adminDashboardData}`, {
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
