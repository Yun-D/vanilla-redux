import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { remove } from '../store';

function ToDo({text, onBtnClick, id}) { //여기서 인자 {}로 잘 감싸기!! 안감싸면 오류남
    return (
        <li>
            <Link to = {`/${id}`}>
                {text} 
                {/* 리듀서에게 메시지 보내기.. */}
            </Link>
            <button onClick = {onBtnClick}> 삭제 </button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    //ownProps 는 text와 id를 가짐
    return {
        onBtnClick: () => dispatch(remove(ownProps.id)) //ownProps가 가지고 있는 id를 받아와 deleteToDo~
    }
}

export default connect(null, mapDispatchToProps) (ToDo);