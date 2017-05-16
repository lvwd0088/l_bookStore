import React,{PropTypes} from 'react';
import { connect } from 'dva';
import styles from './Book.css';
import BookFilter from './BookFilter';
import BookList from './BookList';

function Book({book}){

  console.log(book);

  return (
    <div>
      <BookFilter />
      <BookList />
    </div>
  );

}

Book.propTypes={
  book:PropTypes.object
}

function mapStateToProps({book}){
  return {book};
}

export default connect(mapStateToProps)(Book);
