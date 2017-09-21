import * as bookTypeService from '../../services/bookManager/bookType';
import { message } from 'antd';
export default {
  namespace: 'bookType',
  state: {
    list:[],
    pagination:{
      pageSize:5
    },
    modalVisible:false,
    modalType:"createParent",
    item:{},
    parent
  },
  reducers: {
    showModal(state,action){
      return {
        ...state,
        ...action.payload,
        modalVisible:true
      }
    },
    hideModal(state,action){
      return {
        ...state,
        ...action.payload,
        modalVisible:false
      }
    },
    querySuccess(state,action){
      const list=action.payload.data;
      list.map((data,i)=>{
        if (data.children && data.children.length > 0) {
          data.children.map((children,j)=>{
            delete children.children;
          });
        }else {
          delete data.children;
        }
      });
      return {
        ...state,
        list
      }
    }
  },
  effects: {
    *fetch({payload},{call,put}){
      const respObj=yield call(bookTypeService.fetch,payload);
      const {data}=respObj;
      // const data=[];
      yield put({
        type:'querySuccess',
        payload:{
          data
        }
      });
    },
    *save({payload},{call,put}){
      const respObj=yield call(bookTypeService.save,payload);
      const {data,code}=respObj;
      if (code !== 8) {
        return;
      }
      message.success("保存成功");
      yield put({
        type:'hideModal',
        payload:{}
      });
      yield put({
        type:'fetch',
        payload:{}
      });
    },
    *update({payload},{call,put}){
      const respObj=yield call(bookTypeService.update,payload);
      const {data,code}=respObj;
      if (code === 8) {
        message.success("修改成功");
        yield put({
          type:'hideModal',
          payload:{}
        });
        yield put({
          type:'fetch',
          payload:{}
        });
      }
    },
    *delete({payload},{call,put}){
      const respObj=yield call(bookTypeService.deleteType,payload);
      const {data, code}=respObj;
      if (code === 8) {
        message.success("删除成功");
        yield put({
          type:'fetch',
          payload:{}
        });
      }
      // const data=[];
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen(
        ({pathname,query})=>{
          if(pathname==='/bookType'){
            dispatch({
              type:'fetch',
              payload:{}
            });
          }
        }
      )
    }
  },
};
