import {
  SET_AUTHORIZATION_TOKEN,
  SET_LOGIN_USER,
  SET_LOGED_IN,
  SET_LOGED_IN_USER_PIN,
} from '../constants';

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

export function setLogedIn(loginin: any) {
  return {
    type: SET_LOGED_IN,
    payload: loginin,
  };
}

export function setLoginPin(loginPin: any) {
  return {
    type: SET_LOGED_IN_USER_PIN,
    payload: loginPin,
  };
}
