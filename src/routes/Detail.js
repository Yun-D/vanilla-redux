import React from 'react';
import { connect } from 'react-redux';

function Detail({toDo}) {
    return (
        <>
            <h1>{toDo?.text}</h1>
            {/* ?을 붙이는 이유 -> state가 새로고침되어 해당 id가 없어지면 에러가 나기 때문에, 임시 방편으로 붙여줌 */}
            <h5>Created at : {toDo?.id} </h5>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: {id}
        }
    } = ownProps; // == const id = ownProps.match.params.id;

    //Detail Screen에 state를 통째로 주는 대신 find()라는 array function 사용해 testing function에 만족하는 첫번째 요소 반환.
    //toDo.id를 find() 한 후 parameter의 id와 같은 것을 찾음!
    return {toDo : state.find(toDo => toDo.id === parseInt(id)) } //state 전체 리턴 -> state로부터 가져온 toDos(state), id를 이용해 detail을 볼 수 있음
}

export default connect(mapStateToProps) (Detail);