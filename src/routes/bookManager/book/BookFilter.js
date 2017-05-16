import React,{PropTypes} from 'react';
import { Form, Row, Col, Input, Button, Icon, DatePicker, Radio ,Cascader  } from 'antd';
import styles from './Book.css';
const Search=Input.Search;
const {RangePicker} =DatePicker;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function BookFilter({handleCreate}){

  const options = [{
    value: '玄幻',
    label: '玄幻',
    children: [{
      value: '东方玄幻',
      label: '东方玄幻'
    },{
      value: '西方玄幻',
      label: '西方玄幻'
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing'
    }],
  }];

  return (
    <div className={styles.bookFilter}>
      <Form layout="inline">
        <Row>
          <Col span={4}>
            <FormItem>
              <Search placeholder="请输入图书名称/作者进行查询"
              style={{width:225}}
              onSearch={null}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="创建时间">
              <RangePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder={['开始时间', '结束时间']}
                onOk={null}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="图书分类">
              <Cascader options={options} placeholder="请选择分类进行查询" />
            </FormItem>
          </Col>
          {
            // <Col span={6}>
            //   <FormItem label="图书类型">
            //     <RadioGroup value={1}>
            //       <Radio value={1}>全部</Radio>
            //       <Radio value={2}>封禁</Radio>
            //       <Radio value={3}>作者</Radio>
            //     </RadioGroup>
            //   </FormItem>
            // </Col>
          }
        </Row>
      </Form>
    </div>
  )
}

// BookFilter.propTypes={
//   handleCreate:PropTypes.func
// }

export default BookFilter;
