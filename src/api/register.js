import {get, post, put, del} from './utils';

export function registerApi(data) {
  return post('/auth/register', data);
}
