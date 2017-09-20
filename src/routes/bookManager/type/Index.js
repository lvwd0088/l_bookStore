import React,{PropTypes} from 'react';
import { connect } from 'dva';
import {Button } from 'antd';
import styles from './Index.css';
import TypeList from './TypeList';
import TypeModal from './TypeModal';

function BookType({bookType,dispatch}) {

  const {list,pagination,modalVisible,modalType,item} = bookType;

  function handleShowModal(payload){
    dispatch({
      type:'bookType/showModal',
      payload
    })
  }


  function handleCreateParent(){
    handleShowModal({
      modalType:'createParent',
      item:{}
    })
  }

  const tableProps={
    dataSource:list,
    pagination,
    handleDetele(id){
      console.log(id);
    },
    handleEditParent(record){
      console.log(record);
      handleShowModal({
        modalType:'editParent',
        item:record
      });
    },
    handleCreateSon(){
      console.log("handleCreateSon");
      handleShowModal({
        modalType:'createSon',
        item:{}
      });
    },
    handleEditSon(record){
      console.log(record);
      handleShowModal({
        modalType:'editSon',
        item:record
      });
    },
  }

  const modalProps={
    visible:modalVisible,
    type:modalType,
    item,
    handleCancel(){
      dispatch({
        type:'bookType/hideModal',
        payload:{}
      })
    },
    handleOk(data){
      if (data.id) {
        dispatch({
          type:'bookType/update',
          payload:data
        });
      }else{
        dispatch({
          type:'bookType/save',
          payload:data
        });
      }
    }
  }

  return (
    <div className={styles.normal}>
      <div className={styles.tableTitle}>
        <Button onClick={handleCreateParent} type="primary" size="large">+添加分类</Button>
      </div>
      <div className="tableBody">
        <TypeList {...tableProps}/>
      </div>
      <TypeModal {...modalProps} />
    </div>
  );
}

function mapStateToProps({bookType}) {
  return {bookType};
}

BookType.propTypes={
  bookType:PropTypes.object,
  dispatch:PropTypes.func
}

export default connect(mapStateToProps)(BookType);
