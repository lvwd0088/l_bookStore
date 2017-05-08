import React from 'react';
import { connect } from 'dva';
import styles from './Index.css';
import { Tag, Input, Tooltip, Button } from 'antd';

function BookLabel() {
  return (
    <div className={styles.normal}>
      <div>
        <Tag color="pink">pink</Tag>
        <Tag color="red">red</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="purple">purple</Tag>
      </div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(BookLabel);
