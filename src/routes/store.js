import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDO = (text) => {
    return {
        type: ADD,
        text
    }
}

const deleteToDO = (id) => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD: {
            return [{ text: action.text, id: Date.now()}, ...state];
        }
        case DELETE: {
            return state.filter(toDo => toDo.id !== action.id);
        }
        default: 
            return state;
    }
}

const store = createStore(reducer);

//store.subscribe(); //변동 사항이 생기면 모든 것을 rerender 하도록 react-redux를 사용할 것

export const actionCreators = {
    addToDO,
    deleteToDO
}
export default store;