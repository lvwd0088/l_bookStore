import React,{PropTypes} from 'react';
import { Table} from 'antd';

function UserList({dataSource,pagination,handleUpdate,handlePageChange}){
  const columns=[
    {
      title:'用户名',
      key:"nickName",
      dataIndex:"nickName"
    },
    {
      title:'手机号',
      key:"mobile",
      dataIndex:"mobile"
    },
    {
      title:'邮箱',
      key:"email",
      dataIndex:"email"
    },
    {
      title:'账户类型',
      key:"accountType",
      dataIndex:"accountType",
      render:(text,record)=>{
        if(text===1){
          return <span>普通用户</span>
        }else {
          return <span>作者</span>
        }
      }
    },
    {
      title:'注册时间',
      key:"registerTime",
      dataIndex:"registerTime"
    },
    {
      title:'最后登录时间',
      key:"lastLoginTime",
      dataIndex:"lastLoginTime"
    },
    {
      title:"操作",
      key:'action',
      render:(text,record)=>(
        <a onClick={()=>{handleUpdate(record)}}>编辑</a>
      )
    }
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      onChange={handlePageChange}
      rowKey="id"
      />
  )
}

UserList.propTypes={
  dataSource:PropTypes.array,
  pagination:PropTypes.object,
  handleUpdate:PropTypes.func,
  handlePageChange:PropTypes.func
}

export default UserList;
