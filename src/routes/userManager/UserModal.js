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

  const onOk=()=>{
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        id:item.id
      }
      handleSave(data)
    })
  }

  const modalProps={
    title:`${type==='create'?'创建用户':'修改用户'}`,
    visible,
    onOk:onOk,
    onCancel:handleCancel
  }

  const checkMobile=(rule,value,callback)=>{
    if(value&&value.trim()){
      var regex = /^(((13[0-9]{1})|(147)|(15[0-3]{1})|(15[5-9]{1})|(180)|(182)|(18[5-9]{1}))+\d{8})$/;
      if(regex.test(value)){
        callback();
      }else{
        callback("请填写正确的手机号码");
      }
    }else{
      callback("手机号未填写");
    }
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
                },
                {
                  whitespace:true
                }
              ],
              validateTrigger:'onBlur'
            })(<Input placeholder="请填写用户名" />)
          }
        </FormItem>
        <FormItem label="手机号：" {...formItemLayout}>
          {
            getFieldDecorator('mobile',{
              initialValue:item.mobile,
              rules:[
                {
                  // pattern:'/^(((13[0-9]{1})|(147)|(15[0-3]{1})|(15[5-9]{1})|(180)|(182)|(18[5-9]{1}))+\d{8})$/',
                  // message:'请填写正确的手机号码'
                  validator:checkMobile
                },
                {
                  whitespace:true
                }
              ],
              validateTrigger:'onBlur'
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
                  message:'请填写正确的邮箱'
                },
                {
                  whitespace:true
                }
              ],
              validateTrigger:'onBlur'
            })(<Input placeholder="邮箱" />)
          }
        </FormItem>
        <FormItem label="性别：" {...formItemLayout}>
          {
            getFieldDecorator('sex',{
              initialValue:item.sex||0,
              rules:[
                {
                  required:true,
                  message:'性别未填写'
                }
              ],
              validateTrigger:'onBlur'
            })
            (
              <RadioGroup def>
                <Radio value={0}>男</Radio>
                <Radio value={1}>女</Radio>
              </RadioGroup>
            )
          }
        </FormItem>
        <FormItem label="账户类型：" {...formItemLayout}>
          {
            getFieldDecorator('accountType',{
              initialValue:item.accountType||1,
              rules:[
                {
                  required:true,
                  message:'账户类型未选择'
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
              ],
              validateTrigger:'onBlur'
            })(<InputNumber placeholder="请填写账户余额" style={{width:125}} min={0} />)
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
