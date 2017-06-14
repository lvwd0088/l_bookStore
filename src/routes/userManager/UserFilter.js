import React,{PropTypes} from 'react';
import { Form, Row, Col, Input, Button, Icon, DatePicker, Radio  } from 'antd';
import styles from './User.css';

const Search=Input.Search;
const {RangePicker} =DatePicker;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function UserFilter({handleCreate,userType,searchValue,datePickerValue,handleUserTypeChange,handleDatePickerSearch,handleInputSearch}){
  console.log(searchValue,datePickerValue);
  return (
    <div className={styles.userFilter}>
      <Form layout="inline">
        <Row>
          <Col span={4} offset={2}>
            <FormItem>
              <Search placeholder="请输入用户名/邮箱/手机号进行查询"
                style={{width:225}}
                onSearch={handleInputSearch}
                defaultValue={searchValue}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="注册时间">
              <RangePicker
                format="YYYY-MM-DD"
                placeholder={['开始时间', '结束时间']}
                onChange={handleDatePickerSearch}
                defaultValue={datePickerValue}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="用户类型">
              <RadioGroup value={userType} onChange={handleUserTypeChange}>
                <Radio value={1}>全部</Radio>
                <Radio value={2}>普通用户</Radio>
                <Radio value={3}>作者</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
          <Col span={2} offset={4}>
            <Button type="primary" icon="user-add" onClick={handleCreate}>
              创建用户
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

UserFilter.propTypes={
  handleCreate:PropTypes.func,
  handleUserTypeChange:PropTypes.func,
  handleDatePickerSearch:PropTypes.func,
  handleInputSearch:PropTypes.func,
  userType:PropTypes.number,
  searchValue:PropTypes.string,
  datePickerValue:PropTypes.array
}

export default UserFilter;
