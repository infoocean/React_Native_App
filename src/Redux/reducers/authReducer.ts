import {
  SET_LOGIN_USER,
  SET_AUTHORIZATION_TOKEN,
  SET_LOGED_IN,
  SET_LOGED_IN_USER_PIN,
} from '../constants/index';
const initialState = {
  token: null,
  userDetail: {},
  logedIn: false,
  loginPin: {},
};

const setLoginUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTHORIZATION_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case SET_LOGIN_USER: {
      return {
        ...state,
        userDetail: action.payload,
      };
    }
    case SET_LOGED_IN: {
      return {
        ...state,
        logedIn: action.payload,
      };
    }
    case SET_LOGED_IN_USER_PIN: {
      return {
        ...state,
        loginPin: action.payload,
      };
    }
    default:
      return state;
  }
};
export {setLoginUserReducer};
