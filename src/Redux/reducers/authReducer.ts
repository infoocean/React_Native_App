import {SET_LOGIN_USER, SET_AUTHORIZATION_TOKEN} from '../constants/index';
const initialState = {
  token: null,
  userDetail: {},
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
    default:
      return state;
  }
};
export {setLoginUserReducer};
