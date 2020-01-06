import {put, takeLatest, call, all} from 'redux-saga/effects';
import * as todoTypes from '../ToDoRedux/actionType';
import * as todoActions from '../ToDoRedux/actions';

function* addTask(action) {
  try {
    console.log('log-action.payload ', action.newTask);
    yield put(todoActions.addTask(action.newTask));
  } catch (error) {
    console.log('log-er ', error);
    alert('errr' + JSON.stringify(error));
  }
}
function* toggleTask(action) {
  try {
    console.log('log-action.payload ', action.id);
    yield put(todoActions.toggleTodo(action.id));
  } catch (error) {
    console.log('log-er ', error);
    alert('errr' + JSON.stringify(error));
  }
}
function* deleteTask(action) {
  try {
    console.log('log-action.payload ', action.id);
    yield put(todoActions.deleteTask(action.id));
  } catch (error) {
    console.log('log-er ', error);
    alert('errr' + JSON.stringify(error));
  }
}
export default function* toDoWatcher() {
  yield [
    takeLatest(todoTypes.ADD_TASK, addTask),
    takeLatest(todoTypes.TOGGLE_TODO, toggleTask),
    takeLatest(todoTypes.DELETE_TASK, deleteTask),
  ];
}
