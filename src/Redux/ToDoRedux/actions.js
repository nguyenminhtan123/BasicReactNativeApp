import * as actionType from './actionType';
import {store} from '../store';
import _ from 'lodash';

export const addTask = newTask => {
  console.log('todoData', store);
  const tasks = store.getState().Todo.tasks;
  return {
    type: actionType.ADD_TASK,
    payload: [...tasks, newTask],
    newTask: newTask,
  };
};

export const toggleTodo = id => {
  const tasks = store.getState().Todo.tasks;
  let newTasks = tasks.map(todo =>
    todo.id !== id
      ? todo
      : todo.status === false
      ? {...todo, status: true}
      : {...todo, status: false},
  );
  return {type: actionType.TOGGLE_TODO, payload: newTasks, id: id};
};

export const deleteTask = id => {
  const tasks = store.getState().Todo.tasks;
  let newTasks = _.remove(tasks, item => {
    return item.id !== id;
  });
  return {type: actionType.DELETE_TASK, payload: newTasks, id: id};
};
