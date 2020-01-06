import {get, post, put, del} from './utils';

export function loginApi(data) {
  return post('/auth/login', data);
}
