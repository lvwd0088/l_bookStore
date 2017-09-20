import {request,remove,postSave,patchUpdate} from '../../utils/request';

export function fetch(params){
  return request(`http://127.0.0.1:8080/bookType`);
}

export function save(data,customCallback){
  return postSave(`http://127.0.0.1:8080/bookType`,data,customCallback);
}

export function update(data){
  console.log(data);
  return patchUpdate(`http://127.0.0.1:8080/bookType`,data);
}

export function deleteType(data){
  return remove(`http://127.0.0.1:8080/bookType/${data.id}`);
}
