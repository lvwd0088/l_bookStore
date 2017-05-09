
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
    saveTag(state,action){
      return {
        ...state,
        inputVisible:false
      }
    },
    deleteTag(state,action){
      return {
        ...state,
        inputVisible:false,
        ...action.payload
      }
    }
  },
  effects: {},
  subscriptions: {},
};
