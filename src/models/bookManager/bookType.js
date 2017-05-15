
export default {
  namespace: 'bookType',
  state: {
    list:[
      {
        id:1,
        name:'玄幻',
        desc:'玄幻',
        children:[
          {
            id:11,
            name:'玄幻',
            desc:'玄幻',
            parent:'1'
          },
          {
            id:12,
            name:'玄幻',
            desc:'玄幻',
            parent:'1'
          },
          {
            id:13,
            name:'玄幻',
            desc:'玄幻',
            parent:'1'
          },
          {
            id:14,
            name:'玄幻',
            desc:'玄幻',
            parent:'1'
          },
        ]
      },
      {
        id:2,
        name:'玄幻',
        desc:'玄幻'
      },
      {
        id:3,
        name:'玄幻',
        desc:'玄幻'
      },
      {
        id:4,
        name:'玄幻',
        desc:'玄幻'
      },
      {
        id:5,
        name:'玄幻',
        desc:'玄幻'
      },
      {
        id:6,
        name:'玄幻',
        desc:'玄幻'
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
    }
  },
  effects: {},
  subscriptions: {},
};
