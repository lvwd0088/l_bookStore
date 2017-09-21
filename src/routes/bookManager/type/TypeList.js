import React,{PropTypes} from 'react';
import { Table, Popconfirm } from 'antd';

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
                <a onClick={()=>{handleCreateSon(record.id)}}>添加子分类</a>
                <span className="ant-divider" />
              </span>
            )
          }
          <span>
            <a onClick={()=>{record.parent?handleEditSon(record):handleEditParent(record)}}>编辑</a>
            <span className="ant-divider" />
          </span>
          <span>
            <Popconfirm
              title="确定要删除吗?(删除后无法恢复)"
              okText="确定"
              cancelText="取消"
              onConfirm={()=>{handleDetele(record.id)}}
              >
              <a >删除</a>
            </Popconfirm>
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
