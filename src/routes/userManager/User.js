import React,{PropTypes} from 'react';
import { connect } from 'dva';
import styles from './User.css';
import UserFilter from './UserFilter';
import UserList from './UserList';
import UserModal from './UserModal';

function User({user,dispatch}) {

  const {list,pagination,currentItem,modalVisible,modalType} = user;

  const userListProps={
    dataSource:list,
    pagination,
    handleUpdate(data){
      console.log(data);
      dispatch({
        type:'user/showModal',
        payload:{
          modalType:'update',
          currentItem:data
        }
      })
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
