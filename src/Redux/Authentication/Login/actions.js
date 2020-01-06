import * as LoginTypes from './actionType';

export const login = data => {
  console.log('login data', data);
  return {
    type: LoginTypes.LOGIN,
    payload: data,
  };
};
export const loginSuccess = response => ({
  type: LoginTypes.LOGIN_SUCCESS,
  payload: response,
  token: response.token,
});
export const loginFail = error => ({
  type: LoginTypes.LOGIN_FAIL,
  payload: error,
});
export const logout = () => {
  console.log('logout2');
  return {type: LoginTypes.LOGOUT};
};
