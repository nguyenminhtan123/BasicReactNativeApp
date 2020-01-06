import * as types from './actionType';

const initState = {
  tasks: [
    {id: 1, title: '1 Item', status: false, date: '02/02/2019'},
    {id: 2, title: '2 Item', status: true, date: '02/02/2019'},
    {id: 3, title: '3 Item', status: false, date: '02/01/2019'},
  ],
};

const Todo = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      console.log(action);
      return {...state, tasks: action.payload};
    case types.TOGGLE_TODO:
      return {...state, tasks: action.payload};
    case types.DELETE_TASK:
      console.log(action);
      return {...state, tasks: action.payload};
    default:
      return state;
  }
};
export default Todo;
