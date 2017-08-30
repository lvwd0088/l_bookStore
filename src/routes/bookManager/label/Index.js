import React,{PropTypes} from 'react';
import { connect } from 'dva';
import styles from './Index.css';
import { Tag, Input, Tooltip, Button } from 'antd';

function BookLabel({bookLabel,dispatch}) {

  const {list,inputVisible} = bookLabel;
  const tagsJSX=[];
  const labelInput= input => this.input = input

  list.map((data,index)=>{
    tagsJSX.push(
      <Tag
        key={`${data.name}-${index}`}
        closable={!data.count>0}
        afterClose={handleDelete.bind(this)}
        style={{height:"32px",lineHeight:"32px"}}>
        {data.name.length>6?`${data.name.slice(0,6)}...`:data.name}{`(${data.count})`}
      </Tag>
    );
  });

  function handleDelete(index){
    dispatch({
      type:'bookLabel/deleteTag',
      payload:{
        index
      }
    });
  }

  function handleShowInput(){
    dispatch({
      type:'bookLabel/showInput',
      payload:{
      }
    });
  }

  function handleInputConfirm(e){
    if(e.target.value.trim()){
      dispatch({
        type:'bookLabel/saveTag',
        payload:{
          name:e.target.value.trim(),
          count:0
        }
      });
    }else{
      dispatch({
        type:'bookLabel/hideInput',
        payload:{}
      });
    }
  }

  return (
    <div className={styles.normal}>
      <div className="tags">
        {
          tagsJSX
        }
        {inputVisible&&(
          <Input
            size="small"
            style={{width:'100px',height:'32px'}}
            onBlur={handleInputConfirm.bind(this)}
            onPressEnter={handleInputConfirm.bind(this)}
            autoFocus={true}
            />
        )}
        {!inputVisible&&(
          <Button type="dashed"
            onClick={handleShowInput.bind(this)}>
            + 添加标签
          </Button>
        )}
      </div>
    </div>
  );
}

BookLabel.propTypes={
  bookLabel:PropTypes.object,
  dispatch:PropTypes.func
}

function mapStateToProps({bookLabel}) {
  return {bookLabel};
}

export default connect(mapStateToProps)(BookLabel);
