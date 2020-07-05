import {
  IS_EMAIL,
  IS_LOGIN,
  USER_EMAIL_FETCH,
  SET_USER_NAME,
  IS_LODING,
} from "../action/loginAction";

const intialState = {
  isLogin: false,
  isEmail: false,
  email: "",
  password: "",
  loadingBarProgress: 0,
  error: "",
};

const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case IS_EMAIL:
      return {
        ...state,
        isEmail: action.status,
        loadingBarProgress: 100,
      };
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.status,
        loadingBarProgress: 100,
      };
    case USER_EMAIL_FETCH:
      return {
        ...state,
        email: action.email,
      };
    case SET_USER_NAME:
      return {
        ...state,
        name: action.name,
      };
    case IS_LODING:
      return {
        ...state,
        loadingBarProgress: state.loadingBarProgress + action.value,
      };

    default:
      return state;
  }
};

export default loginReducer;
