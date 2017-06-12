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
    modalType:'create'
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
    querySuccess(state,action){
      const {list}=action.payload;
      return {
        ...state,
        list
      }
    }
  },
  effects: {
    *fetch({payload},{call,put}){
      const respObj=yield call(userService.fetch,payload);
      const {data}=respObj.data;
      yield put({
        type:'querySuccess',
        payload:{
          list:data
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
            })
          }
        }
      )
    }
  },
};
