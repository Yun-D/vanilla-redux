import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 최대한 작은 단위의 function으로 나누려고 따로 뺌. 오로지 액션만을 return
const addToDo = (text) => { 
  return { type: ADD_TODO, text } //이것들은 reducer에 보내진다..
}
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id } 
}

const reducer = (state = [], action) => { //첫 시작 시 데이터가 없다면 빈 array 반환
  switch (action.type) {
    case ADD_TODO:
      const newID = Date.now(); //state는 js 객체 및 배열로 유지되기때문에, state data에 직접 Date를 사용하지 않길 권장한다.
      const newToDoObj = { text: action.text, id: newID }
      return [newToDoObj, ...state]; //array에 과거의 state, 새로운 TODO(object)를 가지게 됨!
      //섭밋 버튼을 누를 때 마다 새로운 array를 리턴하고 있으므로, array가 보이는 방식을 수정할 수 있음~! 새로운 투두가 array의 첫부분으로 가게 됨.
    case DELETE_TODO:
      //array.filter() 메소드는 테스트를 통과한 element들로 만든 새로운 array를 리턴하므로 mutate가 아닌 방식으로 처리할 수 있다!
      const cleaned = state.filter(toDo => toDo.id !== action.id); //삭제할 todo의 id를 가지지 않는 todo를 유지시키도록 필터링.
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}
const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id); //삭제할 todo의 id를 알아올 수 있음. html에서 넘어오는 id 데이터는 string 타입이므로 형변환까지
  store.dispatch( deleteToDo(id) );
}

const paintToDos = () => { //repaint를 위한 함수
  const toDos = store.getState(); //값 가져오기!
  ul.innerHTML = ""; // 이 라인이 없으면 계속해서 모든 값을 가져와 repainting 하므로 html값도 지워서 보여주자

  toDos.forEach(toDo => {
    const li = document.createElement("li"); //리스트 아이템 만들고
    const btn = document.createElement("button"); // 각각 버튼 만들기
    btn.innerText = "삭제"
    btn.addEventListener("click", dispatchDeleteToDo);

    li.id = toDo.id;
    li.innerText = toDo.text + "  "; //받은 값을 아이템 텍스트로 바꿔줌

    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(() => console.log(store.getState()));
store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value; //inputText에서 값 가져오기!
  input.value = "";
  dispatchAddToDo(toDo);

};

form.addEventListener("submit", onSubmit); //submit 됐을 경우 input에서 값 가져옴
