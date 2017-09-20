import React,{PropTypes} from 'react';
import { Form, Input, Modal  } from 'antd';
const FormItem = Form.Item;

function TypeModal(
  {
    visible,
    type,
    form: {
      getFieldDecorator,
      validateFields,
      getFieldsValue,
    },
    item,
    handleCancel,
    handleOk
  }
){

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  function onOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        id: item.id,
      }
      handleOk(data)
    })
  }

  function getTitle(type){
    let typeName=null;
    switch (type) {
      case 'createParent':
        typeName="添加分类"
        break;
      case 'editParent':
        typeName="编辑分类"
        break;
      case 'createSon':
        typeName="添加子分类"
        break;
      case 'editSon':
        typeName="编辑子分类"
        break;
    }
    return typeName
  }

  const modalProps={
    visible,
    title:getTitle(type),
    onOk:onOk,
    onCancel:handleCancel
  }
  return (
    <Modal {...modalProps}>
      <Form>
        <FormItem label="分类名称" {...formItemLayout}>
          {
            getFieldDecorator('name',{
              initialValue:item.name,
              rules:[
                {
                  required:true,
                  message:'分类名称未填写'
                }
              ]
            })(<Input type="text" placeholder="请填写分类名称" />)
          }
        </FormItem>
        <FormItem label="分类简介" {...formItemLayout}>
          {
            getFieldDecorator('description',{
              initialValue:item.description,
              rules:[
                {
                  required:true,
                  message:'分类简介未填写'
                }
              ]
            })(<Input type="textarea" placeholder="请填写分类简介" rows="3" />)
          }
        </FormItem>
      </Form>
    </Modal>
  )
}

TypeModal.propTypes={
  handleOk:PropTypes.func,
  handleCancel:PropTypes.func,
  item:PropTypes.object,
  type:PropTypes.string,
  visible:PropTypes.bool
}

export default Form.create()(TypeModal)
