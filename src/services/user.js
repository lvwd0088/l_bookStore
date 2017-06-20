import {request} from '../utils/request';

export function fetch(params){
  let queryString="";
  if(params.current){
    queryString+=`current=${params.current}&`;
  }
  if(params.accountType){
    queryString+=`accountType=${params.accountType}&`;
  }
  if(params.pageSize){
    queryString+=`pageSize=${params.pageSize}&`;
  }
  if(params.condition){
    queryString+=`condition=${params.condition}&`;
  }
  if(params.beginTime){
    queryString+=`beginTime=${params.beginTime}&`;
  }
  if(params.endTime){
    queryString+=`endTime=${params.endTime}&`;
  }
  return request(`http://127.0.0.1:8080/users?${queryString}`);
}

export function doRemove({id}){
  return remove(`http://127.0.0.1:8080/api/user/${id}`);
}

export function doPatch({id,data}){
  return patchUpdate(`http://127.0.0.1:8080/api/user/${id}`);
}
