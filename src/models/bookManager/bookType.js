import * as bookTypeService from '../../services/bookManager/bookType';
import { message } from 'antd';
export default {
  namespace: 'bookType',
  state: {
    list:[
      {
        id:1,
        name:'玄幻',
        description:'玄幻',
        children:[
          {
            id:11,
            name:'玄幻',
            description:'玄幻',
            parent:'1'
          },
          {
            id:12,
            name:'玄幻',
            description:'玄幻',
            parent:'1'
          },
          {
            id:13,
            name:'玄幻',
            description:'玄幻',
            parent:'1'
          },
          {
            id:14,
            name:'玄幻',
            description:'玄幻',
            parent:'1'
          },
        ]
      },
      {
        id:2,
        name:'玄幻',
        description:'玄幻'
      },
      {
        id:3,
        name:'玄幻',
        description:'玄幻'
      },
      {
        id:4,
        name:'玄幻',
        description:'玄幻'
      },
      {
        id:5,
        name:'玄幻',
        description:'玄幻'
      },
      {
        id:6,
        name:'玄幻',
        description:'玄幻'
      },
    ],
    pagination:{
      pageSize:5
    },
    modalVisible:false,
    modalType:"createParent",
    item:{}
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
        data.children.map((children,j)=>{
          delete children.children;
        });
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
