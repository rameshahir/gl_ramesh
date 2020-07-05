export const IS_EMAIL = "IS_EMAIL";

export const IS_LOGIN = "IS_LOGIN";
export const USER_EMAIL_FETCH = "USER_EMAIL_FETCH";
export const USER_EMAIL_FETCH_SAGA = "USER_EMAIL_FETCH_SAGA";
export const USER_PASSWORD_FETCH_SAGA = "USER_PASSWORD_FETCH_SAGA";
export const SET_USER_NAME = "SET_USER_NAME";
export const IS_LODING = "IS_LODING";

export const isLoding = (value) => {
  return {
    type: IS_LODING,
    value,
  };
};

export const isLogin = (status) => {
  return {
    type: IS_LOGIN,
    status,
  };
};
export const isEmail = (status) => {
  return {
    type: IS_EMAIL,
    status,
  };
};
export const receiveEmail = (email) => {
  return {
    type: USER_EMAIL_FETCH,
    email,
  };
};
export const receiveEmailSaga = (email) => {
  return {
    type: USER_EMAIL_FETCH_SAGA,
    email,
  };
};

export const receivePasswordSaga = (email, password) => {
  return {
    type: USER_PASSWORD_FETCH_SAGA,
    payload: { email, password },
  };
};
export const setUserName = (name) => {
  return {
    type: SET_USER_NAME,
    name,
  };
};
