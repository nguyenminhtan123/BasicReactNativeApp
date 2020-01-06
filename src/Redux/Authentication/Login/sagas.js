import {put, takeLatest, call, all} from 'redux-saga/effects';
import {loginApi} from '../../../api/login';
import * as loginType from '../Login/actionType';
import * as loginActions from '../Login/actions';
import {AsyncStorage} from 'react-native';
import Navigation from 'react-native-navigation';
import {pushBottomTab} from '../../../navigation/pushBottomTab';
import startApp from '../../../navigation/startApp';

function* login(action) {
  //alert('success');
  //console.error('log-action.payload ', action.payload);
  try {
    const response = yield call(loginApi, action.payload);
    //alert('success');
    //console.log('respon', response);
    yield put(loginActions.loginSuccess(response));
    //pushBottomTab();
    startApp();
    yield AsyncStorage.setItem('token', response.token);
  } catch (error) {
    //console.log('log-er ', error);
    alert('errr' + JSON.stringify(error.message));
    put(loginActions.loginFail(error));
  }
}
// function* logout() {
//   console.log('logout1');
//   try {
//     yield put(AsyncStorage.clear());
//     yield put(
//       Navigation.setRoot({
//         root: {
//           stack: {
//             options: {
//               topBar: {
//                 visible: false,
//               },
//             },
//             children: [
//               {
//                 component: {
//                   name: 'Login',
//                 },
//               },
//             ],
//           },
//         },
//       }),
//     );
//   } catch (error) {}
// }
export default function* loginWatcher() {
  yield takeLatest(loginType.LOGIN, login);
}
