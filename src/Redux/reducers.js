import {combineReducers} from 'redux';
import Todo from './ToDoRedux/reducer';
import registerReducer from './Authentication/Register/reducer';
import loginReducer from './Authentication/Login/reducer';

const reducers = combineReducers({
  Todo,
  registerReducer,
  loginReducer,
});
export default reducers;
