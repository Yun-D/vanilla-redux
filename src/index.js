

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const toDOs = [];

const createTodo = toDo => { //얻은 값을 인자로 
  const li = document.createElement("li"); //리스트 아이템 만들고
  li.innerText = toDo; //받은 값을 아이템 텍스트로 바꿔줌
  ul.appendChild(li);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value; //inputText에서 값 가져오기!
  input.value = "";
  createTodo(toDo); //함수 호출
}

form.addEventListener("submit", onSubmit); //submit 됐을 경우 input에서 값 가져옴
