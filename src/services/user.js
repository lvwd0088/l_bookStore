import {request,patchUpdate,postSave} from '../utils/request';

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

export function save(data){
  return postSave(`http://127.0.0.1:8080/users`,data);
}

export function update(data){
  return patchUpdate(`http://127.0.0.1:8080/users`,data);
}
