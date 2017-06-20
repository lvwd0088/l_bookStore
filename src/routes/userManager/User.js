import React,{PropTypes} from 'react';
import { connect } from 'dva';
import styles from './User.css';
import UserFilter from './UserFilter';
import UserList from './UserList';
import UserModal from './UserModal';

function User({user,dispatch}) {

  const {list,pagination,currentItem,modalVisible,modalType,accountType,searchValue,datePickerValue} = user;

  const userListProps={
    dataSource:list,
    pagination,
    handleUpdate(data){
      dispatch({
        type:'user/showModal',
        payload:{
          modalType:'update',
          currentItem:data
        }
      })
    },
    handlePageChange(page){
      handleFetch("page",page);
    }
  }


  const userModalProps={
    visible:modalVisible,
    type:modalType,
    item:modalType==='create'?{}:currentItem,
    handleSave(){
      dispatch({
        type:'user/hideModal',
        payload:{}
      })
    },
    handleCancel(){
      dispatch({
        type:'user/hideModal',
        payload:{}
      })
    }
  }

  const UserFilterProps={
    handleCreate(){
      dispatch({
        type:'user/showModal',
        payload:{
          modalType:'create'
        }
      })
    },
    handleaccountTypeChange(e){
      dispatch({
        type:'user/changeUserFilter',
        payload:{
          accountType:e.target.value
        }
      });
      let params={
        searchValue,
        accountType,
        datePickerValue
      };
      handleFetch("accountType",e.target.value);
    },
    handleDatePickerSearch(value,dateString){
      dispatch({
        type:'user/changeUserFilter',
        payload:{
          datePickerValue:value
        }
      });
      handleFetch("datePickerValue",value);
    },
    handleInputSearch(value){
      dispatch({
        type:'user/changeUserFilter',
        payload:{
          searchValue:value
        }
      });
      handleFetch("condition",value);
      // let params={
      //   searchValue,
      //   accountType,
      //   datePickerValue
      // };
      // params.searchValue=value;
      // handleFetch(params);
    },
    accountType,
    searchValue,
    datePickerValue
  }

  function handleFetch(type,value){
    let params={
      condition:searchValue,
      accountType
    };
    if(typeof value ==='object'){
      if(value instanceof Array){
        if(value.length>0){
          params.beginTime=handleFormatMoment(value[0]);
          params.endTime=handleFormatMoment(value[1]);
        }
      }else{
        params.current=value.current;
        params.pageSize=value.pageSize;
      }
    }else{
      params[type]=value;
    }
    if(datePickerValue&&(!value instanceof Array)){
      params.beginTime=handleFormatMoment(datePickerValue[0]);
      params.endTime=handleFormatMoment(datePickerValue[1]);
    }
    dispatch({
      type:'user/fetch',
      payload:params
    });
  }

  function handleFormatMoment(moment){
    if(moment){
      return moment.format('YYYY-MM-DD');
    }
    return null;
  }

  return (
    <div className={styles.normal}>
      <UserFilter {...UserFilterProps}/>
      <UserList {...userListProps} />
      <UserModal {...userModalProps} />
    </div>
  );
}

function mapStateToProps({user}) {
  return {user};
}

User.propTypes={
  user:PropTypes.object,
  dispatch:PropTypes.func
}

export default connect(mapStateToProps)(User);
