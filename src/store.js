import {createStore} from "redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() }) //리턴 하지 않고 state를 mutate함
            // 액션에게 보내고 싶은 정보를 payload와 함께 보내준다!
        },
        remove: (state, action) => //여기서 {}를 붙이면 리턴 x, 없으면 리턴!!!!
            state.filter(toDo => toDo.id !== action.payload) //새로운 state를 리턴함
    }
});

const store = configureStore({ reducer: toDos.reducer });

//store.subscribe(); //변동 사항이 생기면 모든 것을 rerender 하도록 react-redux를 사용할 것

export const { add, remove } = toDos.actions;
export default store;