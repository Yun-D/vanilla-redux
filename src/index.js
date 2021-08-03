import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => { //첫 시작 시 데이터가 없다면 빈 array 반환
  switch(action.type) {
    case ADD_TODO :
      return [...state, {text: action.text, id: action.id}]; //array에 과거의 state, 새로운 TODO(object)를 가지게 됨!
    case DELETE_TODO :
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);


// const createTodo = toDo => { //얻은 값을 인자로 
//   const li = document.createElement("li"); //리스트 아이템 만들고
//   li.innerText = toDo; //받은 값을 아이템 텍스트로 바꿔줌
//   ul.appendChild(li);
// }

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value; //inputText에서 값 가져오기!
  input.value = "";
  const newID = Date.now();
  store.dispatch({type: ADD_TODO, text: toDo, id: newID});
};

form.addEventListener("submit", onSubmit); //submit 됐을 경우 input에서 값 가져옴
