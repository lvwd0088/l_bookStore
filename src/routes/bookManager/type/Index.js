import React,{PropTypes} from 'react';
import { connect } from 'dva';
import styles from './Index.css';
import TypeList from './TypeList';

function BookType({bookType,dispatch}) {
  const {list} = bookType;
  return (
    <div className={styles.normal}>
      Route Component: Index
      <TypeList dataSource={list} />
    </div>
  );
}

function mapStateToProps({bookType}) {
  return {bookType};
}

BookType.propTypes={
  bookType:PropTypes.object,
  dispatch:PropTypes.func
}

export default connect(mapStateToProps)(BookType);
