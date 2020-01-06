import {put, takeLatest, call, all} from 'redux-saga/effects';
import {registerApi} from '../../../api/register';
import * as registerType from '../Register/actionType';
import * as registerActions from '../Register/actions';
import {pushBottomTab} from '../../../navigation/pushBottomTab';
import {ToastAndroid} from 'react-native';
import {AsyncStorage} from 'react-native';
import startApp from '../../../navigation/startApp';

function* register(action) {
  try {
    console.log('log-action.payload ', action.payload);
    const response = yield call(registerApi, action.payload);
    console.log('respon', response);
    yield put(registerActions.registerSuccess(response));
    yield AsyncStorage.setItem('token', response.token);
    ToastAndroid.show('Register Success', ToastAndroid.SHORT);
    //pushBottomTab();
    startApp();
  } catch (error) {
    console.log('log-er ', error);
    alert(JSON.stringify(error.message));
    put(registerActions.registerFail(error));
  }
}
export default function* registerWatcher() {
  yield takeLatest(registerType.REGISTER, register);
}
