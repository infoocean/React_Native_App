import {SET_AUTHORIZATION_TOKEN, SET_LOGIN_USER} from '../constants';

export function setauthtoken(token: any) {
  return {
    type: SET_AUTHORIZATION_TOKEN,
    payload: token,
  };
}

export function setLoginUser(userData: any) {
  return {
    type: SET_LOGIN_USER,
    payload: userData,
  };
}
