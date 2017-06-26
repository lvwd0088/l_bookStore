import React,{PropTypes} from 'react';
import { Form, Input, InputNumber, Radio, Modal  } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function UserModal({
  visible,
  type,
  item={},
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  handleSave,
  handleCancel
}){

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

  const modalProps={
    title:`${type==='create'?'创建用户':'修改用户'}`,
    visible,
    onOk:handleSave,
    onCancel:handleCancel
  }


  return (
    <Modal {...modalProps}>
      <Form>
        <FormItem label="用户名：" {...formItemLayout}>
          {
            getFieldDecorator('nickName',{
              initialValue:item.nickName,
              rules:[
                {
                  required:true,
                  message:'用户名未填写'
                }
              ]
            })(<Input placeholder="请填写用户名" />)
          }
        </FormItem>
        <FormItem label="手机号：" {...formItemLayout}>
          {
            getFieldDecorator('mobile',{
              initialValue:item.mobile,
              rules:[
                {
                  required:true,
                  message:'手机号未填写'
                }
              ]
            })(<Input placeholder="请填写手机号" />)
          }
        </FormItem>
        <FormItem label="邮箱：" {...formItemLayout}>
          {
            getFieldDecorator('email',{
              initialValue:item.email,
              rules:[
                {
                  required:true,
                  type:'email',
                  message:'邮箱未填写'
                }
              ]
            })(<Input placeholder="邮箱用户名" />)
          }
        </FormItem>
        <FormItem label="性别：" {...formItemLayout}>
          {
            getFieldDecorator('sex',{
              initialValue:item.sex,
              rules:[
                {
                  required:true,
                  message:'性别未填写'
                }
              ]
            })
            (
              <RadioGroup>
                <Radio value={0}>男</Radio>
                <Radio value={1}>女</Radio>
              </RadioGroup>
            )
          }
        </FormItem>
        <FormItem label="账户类型：" {...formItemLayout}>
          {
            getFieldDecorator('accountType',{
              initialValue:item.accountType,
              rules:[
                {
                  required:true,
                  message:'账户类型未填写'
                }
              ]
            })(
              <RadioGroup>
                <Radio value={1}>普通用户</Radio>
                <Radio value={2}>作者</Radio>
              </RadioGroup>
            )
          }
        </FormItem>
        <FormItem label="账户余额：" {...formItemLayout}>
          {
            getFieldDecorator('accountRemain',{
              initialValue:item.accountRemain,
              rules:[
                {
                  required:true,
                  message:'账户余额未填写'
                }
              ]
            })(<InputNumber placeholder="请填写账户余额" style={{width:125}} />)
          }
        </FormItem>
      </Form>
    </Modal>
  )
}

UserModal.propTypes={
  visible:PropTypes.bool,
  form:PropTypes.object.isRequired,
  type:PropTypes.string,
  item:PropTypes.object,
  handleSave:PropTypes.func,
  handleCancel:PropTypes.func
}

export default Form.create()(UserModal)
