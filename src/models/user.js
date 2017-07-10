import {query} from '../services/user'
import * as userService from '../services/user';
import { message } from 'antd';

export default {
  namespace: 'user',
  state: {
    list:[],
    pagination:{
      pageSize:5
    },
    currentItem:{},
    modalVisible:false,
    modalType:'create',
    accountType:1,
    searchValue:null,
    datePickerValue:null
  },
  reducers: {
    showModal(state,action){
      return{
        ...state,
        modalVisible:true,
        ...action.payload
      }
    },
    hideModal(state,action){
      return {
        ...state,
        modalVisible:false
      }
    },
    changeUserFilter(state,action){
      return{
        ...state,
        ...action.payload
      }
    },
    resetUserFilter(state,action){
      return{
        ...state,
        accountType:0,
        datePickerValue:null,
        searchValue:null
      }
    },
    querySuccess(state,action){
      const {list,current,total,pageSize}=action.payload.data;
      return {
        ...state,
        pagination:{
          current,
          total,
          pageSize
        },
        list
      }
    },
  },
  effects: {
    *fetch({payload},{call,put}){
      const respObj=yield call(userService.fetch,payload);
      const {data}=respObj;
      yield put({
        type:'querySuccess',
        payload:{
          data
        }
      });
    },
    *save({payload},{call,put}){
      const respObj=yield call(userService.save,payload,({ code,msg})=>{
        console.log(code,msg);
        // console.log(resp);
        if(code===1201){
          message.error("用户名或邮箱或手机已被占用，请检查！");
          const error = new Error(msg);
          throw error;
        }
        // else{
        //   resp.then(cb);
        // }
      });
      console.log(respObj);
      message.success("保存成功");
      yield put({
        type:'hideModal',
        payload:{
          success:true
        }
      });
      yield put({
        type:'fetch',
        payload:{}
      });
    },
    *update({payload},{call,put,select}){
      const respObj=yield call(userService.update,payload);
      message.success("编辑成功");
      const state = yield select();
      yield put({
        type:'hideModal',
        payload:{
          success:true
        }
      });
      const userState=state.user;
      const {searchValue,accountType,datePickerValue,pagination} = userState;
      let params={
        current:pagination.current,
        pageSize:pagination.pageSize,
        condition:searchValue,
        accountType
      }
      if(typeof datePickerValue ==='object'){
        if(datePickerValue instanceof Array){
          if(value.length>0){
            params.beginTime=handleFormatMoment(value[0]);
            params.endTime=handleFormatMoment(value[1]);
          }
        }
      }
      yield put({
        type:'fetch',
        payload:params
      });
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen(
        ({pathname,query})=>{
          if(pathname==='/user'){
            dispatch({
              type:'fetch',
              payload:query
            });
            dispatch({
              type:'resetUserFilter',
              payload:null
            })
          }
        }
      )
    }
  },
};
