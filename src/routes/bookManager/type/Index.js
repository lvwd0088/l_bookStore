import React,{PropTypes} from 'react';
import { connect } from 'dva';
import {Button } from 'antd';
import styles from './Index.css';
import TypeList from './TypeList';
import TypeModal from './TypeModal';

function BookType({bookType,dispatch}) {

  const {list,pagination,modalVisible,modalType,item,parent} = bookType;

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
      dispatch({
        type:'bookType/delete',
        payload:{
          id
        }
      })
    },
    handleEditParent(record){
      handleShowModal({
        modalType:'editParent',
        item:record
      });
    },
    handleCreateSon(parent){
      handleShowModal({
        modalType:'createSon',
        parent
      });
    },
    handleEditSon(record){
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
    parent,
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

  const TypeModalGen=()=>
    <TypeModal {...modalProps} />;

  return (
    <div className={styles.normal}>
      <div className={styles.tableTitle}>
        <Button onClick={handleCreateParent} type="primary" size="large">+添加分类</Button>
      </div>
      <div className="tableBody">
        <TypeList {...tableProps}/>
      </div>
      <TypeModalGen />
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
