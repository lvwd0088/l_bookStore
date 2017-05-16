import React,{PropTypes} from 'react';
import { Table} from 'antd';

function BookList(){
  const columns=[
    {
      title:'书名',
      key:"name",
      dataIndex:"name"
    },
    // {
    //   title:'简介',
    //   key:"desc",
    //   dataIndex:"desc"
    // },
    {
      title:'作者',
      key:"authorName",
      dataIndex:"authorName"
    },
    {
      title:'总字数',
      key:"totalLength",
      dataIndex:"totalLength"
    },
    {
      title:'点击数',
      key:"hits",
      dataIndex:"hits"
    },
    // {
    //   title:'状态',
    //   key:"state",
    //   dataIndex:"state"
    // },
    {
      title:'创建时间',
      key:"addTime",
      dataIndex:"addTime"
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
      columns={columns}
      rowKey="id"
      />
  )
}

// BookList.propTypes={
//   dataSource:PropTypes.array,
//   pagination:PropTypes.object,
//   handleUpdate:PropTypes.func
// }

export default BookList;
