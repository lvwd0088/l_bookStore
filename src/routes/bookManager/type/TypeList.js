import React,{PropTypes} from 'react';
import { Table} from 'antd';

function TypeList({dataSource}){

  const columns=[
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '分类简介',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title:"操作",
      key:'action',
      render:(text,record)=>(
        <span>
          <a onClick={()=>{console.log(record);}}>添加子分类  </a>
          <a onClick={()=>{console.log(record);}}>编辑  </a>
          <a onClick={()=>{console.log(record);}}>删除  </a>
        </span>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey="id"
      />
  )

}

TypeList.propTypes={
  dataSource:PropTypes.array
}

export default TypeList;
