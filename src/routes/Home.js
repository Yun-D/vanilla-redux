import React, { useState } from 'react';
import {connect} from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from './store';

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault(); //페이지가 새로고침 되지 않고 결과를 보여줄 수 있게 하는 메서드
        addToDo(text);
        setText("");
    }

    return (
        <> 
         {/* 위는 Fragment 코드 */}
            <h1>To Do</h1>
            <form onSubmit = {onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                {/* 여기서 text는 state로 감 */}
                <button> 추가 </button>
            </form>

            <ul> 
                {toDos.map(toDo => ( 
                    <ToDo {...toDo} key={toDo.id} /> 
                ))} 
            </ul>
            {/* 여기서 toDos는 prop */}
        </>
    );
}

//직접 dispatch나 action Creators를 처리 하지 않고 function을 이용해서 props로 보냄
function mapStateToProps(state) { //redux state로부터 Home(component)에 props로써 전달
    return { toDos: state } //state를 포함한 object를 리턴!
}
function mapDispatchToProps(dispatch) { //mapState는 필요치않고 dispatch만 필요할 경우엔 connect(null, mapDispatchToProps) 이렇게 쓰면 됨
    return {
        addToDo: (text) => dispatch(actionCreators.addToDO(text)) //addToDo는 dispatch를 호출 / dispatch는 actionCreater를 호출. 이건 함수~! props를 만드는 것
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home); //component인 Home과 함께 state를 가져올 것.