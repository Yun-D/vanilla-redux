import React from 'react';
import { connect } from "react-redux";
import { actionCreators } from '../routes/store';

function ToDo({text, onBtnClick}) { //여기서 인자 {}로 잘 감싸기!! 안감싸면 오류남
    return (
        <li>
            {text} <button onClick = {onBtnClick}> 삭제 </button>
            {/* 리듀서에게 메시지 보내기.. */}
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    //ownProps 는 text와 id를 가짐

    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDO(ownProps.id)) //ownProps가 가지고 있는 id를 받아와 deleteToDo~
    }
}

export default connect(null, mapDispatchToProps) (ToDo);