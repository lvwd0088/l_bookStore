
export default {
  namespace: 'app',
  state: {
    msg:"",
  },
  reducers: {
    showErrorMessage(state,action){
      const {msg}=action.payload;
      return{
        ...state,
        msg
      }
    },
    hideErrorMessage(state,action){
      return{
        ...state,
        msg:""
      }
    }
  },
  effects: {},
  subscriptions: {},
};
