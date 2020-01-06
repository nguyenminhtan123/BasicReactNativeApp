import {Navigation} from 'react-native-navigation';
import App from './App';
import Home from './src/screens/Home/Home';
import Detail from './src/screens/Home/Detail';
import Login from './src/screens/Authentication/Login';
import UserProfile from './src/screens/UserProfile/UserProfile';
import ToDoList from './src/screens/ToDoList/ToDoList';
import EditTodoItem from './src/screens/ToDoList/EditTodoItem';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import React from 'react';
import {AsyncStorage} from 'react-native';
import startApp from './src/navigation/startApp';
import Register from './src/screens/Authentication/Register';
import MyComponent from './src/components/animation';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
Navigation.registerComponent('App', () => App);
Navigation.registerComponent('MyComponent', () => MyComponent);
Navigation.registerComponent('Home', () => Home);
// Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Detail', () => Detail);
//Navigation.registerComponent('UserProfile', () => UserProfile);

Navigation.registerComponent(
  'ToDoList',
  () => ReduxProvider(ToDoList),
  () => ToDoList,
);
// eslint-disable-next-line prettier/prettier
Navigation.registerComponent(
  'Login',
  () => ReduxProvider(Login),
  () => Login,
);

Navigation.registerComponent(
  'EditTodoItem',
  () => ReduxProvider(EditTodoItem),
  () => EditTodoItem,
);

Navigation.registerComponent(
  'UserProfile',
  () => ReduxProvider(UserProfile),
  () => UserProfile,
);

Navigation.registerComponent(
  'Register',
  () => ReduxProvider(Register),
  () => Register,
);

Navigation.events().registerAppLaunchedListener(async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    startApp();
  } else {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: 'Login',
              },
            },
          ],
        },
      },
    });
  }
});
