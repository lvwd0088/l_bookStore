import fetch from 'dva/fetch';
import { message } from 'antd';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if(response.status<200||response.status>=300){
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  return response;
}

function parseErrorMessage({ code,msg,data }) {
  if (code !== 8) {
    message.error('加载成功啦', 5);
  } 
  return { data };
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(parseErrorMessage);
}

export function remove(url){
  return request(url,{method:'delete'});
    // .then(checkStatus)
    // .then(err=>({err}));
}

export function patchUpdate(url,data){
  return request(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export function postSave(url,data){
  return request(url,{
    method:'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
}
