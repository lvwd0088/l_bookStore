import {request,remove,postSave} from '../../utils/request';

export function fetch(params){
  return request(`http://127.0.0.1:8080/bookLabel`);
}

export function save(data,customCallback){
  return postSave(`http://127.0.0.1:8080/bookLabel`,data,customCallback);
}

export function deleteTag(data){
  return remove(`http://127.0.0.1:8080/bookLabel/${data.id}`);
}
