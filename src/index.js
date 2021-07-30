import { createStore } from 'redux';

const add = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//오타 사고를 미리 방지하기 위해 모든 string을 변수화!
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => { //데이터(state) 설정. 이 인자들은 현재의 state!!
  //인자(argument)로 default state를 Initializing할 수 있다.
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}
const countStore = createStore(countModifier); //스토어 생성

const onChange = () => { //store에 변화가 있을 때 마다 감지해서 불려질 함수!
  number.innerText = countStore.getState(); //html에게 뭔가 바뀌었다고 알려주기 위해 사용
}
countStore.subscribe(onChange);

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD }); //action 보내기
})
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
})
