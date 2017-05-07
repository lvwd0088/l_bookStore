
export default {
  namespace: 'user',
  state: {
    list:[
      {
        id:1,
        userName:'流云谷',
        sex:'男',
        mobile:13323323333,
        email:'290994589@qq.com',
        accountRemain:99,
        accountType:'普通用户',
        registerTime:'2017-05-07 21:48:01',
        lastLoginTime:'2017-05-07 21:48:01'
      },
      {
        id:2,
        userName:'流云谷2',
        sex:'男',
        mobile:13323323333,
        email:'290994589@qq.com',
        accountRemain:99,
        accountType:'普通用户',
        registerTime:'2017-05-07 21:48:01',
        lastLoginTime:'2017-05-07 21:48:01'
      },
      {
        id:3,
        userName:'流云谷3',
        sex:'男',
        mobile:13323323333,
        email:'290994589@qq.com',
        accountRemain:99,
        accountType:'普通用户',
        registerTime:'2017-05-07 21:48:01',
        lastLoginTime:'2017-05-07 21:48:01'
      },
      {
        id:4,
        userName:'流云谷4',
        sex:'男',
        mobile:13323323333,
        email:'290994589@qq.com',
        accountRemain:99,
        accountType:'普通用户',
        registerTime:'2017-05-07 21:48:01',
        lastLoginTime:'2017-05-07 21:48:01'
      },
      {
        id:5,
        userName:'流云谷5',
        sex:'男',
        mobile:13323323333,
        email:'290994589@qq.com',
        accountRemain:99,
        accountType:'普通用户',
        registerTime:'2017-05-07 21:48:01',
        lastLoginTime:'2017-05-07 21:48:01'
      },
      {
        id:6,
        userName:'流云谷6',
        sex:'男',
        mobile:13323323333,
        email:'290994589@qq.com',
        accountRemain:99,
        accountType:'普通用户',
        registerTime:'2017-05-07 21:48:01',
        lastLoginTime:'2017-05-07 21:48:01'
      }
    ],
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
    }
  },
  effects: {},
  subscriptions: {},
};
