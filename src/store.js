import {createStore} from "redux";
import { createAction } from '@reduxjs/toolkit';


const addToDo = createAction("ADD"); //이거 자체는 함수, 뒤에 .type를 붙이면 string text
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type: { // => ADD를 리턴
            return [{ text: action.payload, id: Date.now() }, ...state];
            // 액션에게 보내고 싶은 정보를 payload와 함께 보내준다!
        }
        case deleteToDo.type: {
            return state.filter(toDo => toDo.id !== action.payload);
        }
        default: 
            return state;
    }
}

const store = createStore(reducer);

//store.subscribe(); //변동 사항이 생기면 모든 것을 rerender 하도록 react-redux를 사용할 것

export const actionCreators = {
    addToDo,
    deleteToDo
}
export default store;