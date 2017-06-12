import {request} from '../utils/request';

export function fetch({page}){
    return request(`http://127.0.0.1:8080/users`);
}

export function doRemove({id}){
    return remove(`http://127.0.0.1:8080/api/user/${id}`);
}

export function doPatch({id,data}){
  return patchUpdate(`http://127.0.0.1:8080/api/user/${id}`);
}
