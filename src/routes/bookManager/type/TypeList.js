import React,{PropTypes} from 'react';
import { Table} from 'antd';

function TypeList(
  {
    dataSource,
    pagination,
    handleEditParent,
    handleCreateSon,
    handleEditSon,
    handleDetele
  }
){

  const columns=[
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
      width:'25%',
    },
    {
      title: '分类简介',
      dataIndex: 'description',
      key: 'description',
      width:'60%'
    },
    {
      title:"操作",
      key:'action',
      render:(text,record)=>(
        <span>
          {
            !record.parent&&(
              <span>
                <a onClick={()=>{handleCreateSon()}}>添加子分类</a>
                <span className="ant-divider" />
              </span>
            )
          }
          <span>
            <a onClick={()=>{record.parent?handleEditSon(record):handleEditParent(record)}}>编辑</a>
            <span className="ant-divider" />
          </span>
          <span>
            <a onClick={()=>{handleDetele(record.id)}}>删除</a>
          </span>
        </span>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      rowKey="id"
      />
  )

}

TypeList.propTypes={
  dataSource:PropTypes.array,
  pagination:PropTypes.object,
  handleEditParent:PropTypes.func,
  handleCreateSon:PropTypes.func,
  handleEditSon:PropTypes.func,
  handleDetele:PropTypes.func
}

export default TypeList;
