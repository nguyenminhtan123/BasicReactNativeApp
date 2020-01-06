// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import registerWatcher from './Authentication/Register/sagas';
import loginWatcher from './Authentication/Login/sagas';
import toDoWatcher from './ToDoRedux/sagas';
// Redux Saga: Root Saga
export default function* rootSaga() {
  yield all([fork(loginWatcher), fork(registerWatcher), fork(toDoWatcher)]);
}
