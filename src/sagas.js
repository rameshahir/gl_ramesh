import { call, put, takeEvery, all } from "redux-saga/effects";
import { fetchUserEmailData, fetchUserPasswordData } from "./api";
import {
  USER_EMAIL_FETCH_SAGA,
  USER_PASSWORD_FETCH_SAGA,
  setUserName,
  isLogin,
  receiveEmail,
  isEmail,
} from "./action/loginAction";

function* fetchUserEmail(action) {
  try {
    const { user } = yield call(fetchUserEmailData, action.payload);
    yield put(receiveEmail(user.email));
    yield put(isEmail(true));
  } catch (e) {
    console.log(e);
  }
}

function* fetchUserPassword(action) {
  try {
    const { user } = yield call(fetchUserPasswordData, action.payload);
    yield put(setUserName(`${user.firstName} ${user.lastName}`));
    yield put(isLogin(true));
  } catch (e) {
    console.log(e);
  }
}

function* emailSaga() {
  yield takeEvery(USER_EMAIL_FETCH_SAGA, fetchUserEmail);
}

function* passwordSaga() {
  yield takeEvery(USER_PASSWORD_FETCH_SAGA, fetchUserPassword);
}

function* rootSaga() {
  yield all([
    emailSaga(), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    passwordSaga(),
  ]);
}

export default rootSaga;
