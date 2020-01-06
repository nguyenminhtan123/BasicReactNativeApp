// import {createStore} from 'redux';
// import reducers from '../Redux/Reducer';
// import createSagaMiddleware from 'redux-saga';

// const store = createStore(reducers);
// export default store;
// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import reducers from './reducers';
// Imports: Redux Root Saga
import rootSaga from '../Redux/sagas';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, createLogger()),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
