import * as bookLabelService from '../../services/bookManager/bookLabel';
import { message } from 'antd';
export default {
  namespace: 'bookLabel',
  state: {
    inputVisible:false,
    list:[
      {
        name:"穿越时空",
        count:10,
      },
      {
        name:"都市情缘",
        count:15,
      },
      {
        name:"重生",
        count:0
      },
      {
        name:"宫廷侯爵",
        count:5
      },
      {
        name:"布衣生活",
        count:0
      },
      {
        name:"花季雨季",
        count:20
      },
    ]
  },
  reducers: {
    querySuccess(state,action){
      const list=action.payload.data;
      return {
        ...state,
        list,
        inputVisible:false
      }
    },
    showInput(state,action){
      return {
        ...state,
        inputVisible:true
      }
    },
    hideInput(state,action){
      return {
        ...state,
        inputVisible:false
      }
    },
  },
  effects: {
    *fetch({payload},{call,put}){
      const respObj=yield call(bookLabelService.fetch,payload);
      const {data}=respObj;
      // const data=[];
      yield put({
        type:'querySuccess',
        payload:{
          data
        }
      });
    },
    *saveTag({payload},{call,put}){
      const respObj=yield call(bookLabelService.save,payload,({ code,msg})=>{
        if(code===1201){
          message.error("标签名称已存在");
        }
      });
      if(respObj.code===8){
        message.success("保存成功");
        yield put({
          type:'fetch',
          payload:{}
        });
      }
    },
    *deleteTag({payload},{call,put}){
      const respObj=yield call(bookLabelService.deleteTag,payload);
      if(respObj.code===8){
        message.success("删除成功");
        yield put({
          type:'fetch',
          payload:{}
        });
      }
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen(
        ({pathname,query})=>{
          if(pathname==='/bookLabel'){
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
