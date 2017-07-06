import {query} from '../services/user'
import * as userService from '../services/user';

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
    *update({payload},{call,put,select}){
      const respObj=yield call(userService.update,payload);
      console.log(respObj);
      const state = yield select();
      yield put({
        type:'hideModal',
        payload:{
          success:true
        }
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
