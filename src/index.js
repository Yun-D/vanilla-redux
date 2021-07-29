 import {createStore} from 'redux';
 
 const add = document.getElementById("plus"); 
 const minus = document.getElementById("minus"); 
 const number = document.querySelector("span");

const countModifier = (count = 0, action) => { //데이터(state) 설정. 이 인자들은 현재의 state!!
  //인자(argument)로 default state를 Initializing할 수 있다.
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS"){
    return count - 1;
  } else
    return count;
}
const countStore = createStore(countModifier); //스토어 생성

countStore.dispatch({type: "ADD"}); //action 보내기
countStore.dispatch({type: "MINUS"});

//html에게 뭔가 바뀌었다고 알려주기 위해 사용
