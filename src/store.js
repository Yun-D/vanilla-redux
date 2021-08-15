import {createStore} from "redux";
import { createAction, createReducer } from '@reduxjs/toolkit';


const addToDo = createAction("ADD"); //이거 자체는 함수, 뒤에 .type를 붙이면 string text
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], { //비어있는 array에 새로운 toDo를 push해주는 것!
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() }) //리턴 하지 않고 state를 mutate함
        // 액션에게 보내고 싶은 정보를 payload와 함께 보내준다!

    }, //action이 addToDo일 때, {~}를 해라!
    [deleteToDo]: (state, action) => //여기서 {}를 붙이면 리턴 x, 없으면 리턴!!!!
        state.filter(toDo => toDo.id !== action.payload) //새로운 state를 리턴함
});

const store = createStore(reducer);

//store.subscribe(); //변동 사항이 생기면 모든 것을 rerender 하도록 react-redux를 사용할 것

export const actionCreators = {
    addToDo,
    deleteToDo
}
export default store;