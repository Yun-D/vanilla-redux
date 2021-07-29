 const add = document.getElementById("plus"); 
 const minus = document.getElementById("minus"); 
 const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count; //number.inerText에 카운트 값 넣기. html에게 뭔가 바뀌었다고 알려주기 위해 사용
}

 const handlePlus = () => {
  count++;
  updateText(); //현재 카운터와 함께 text를 repaint
 }
 const handleMinus = () => {
   count--;
   updateText();
}

 add.addEventListener("click", handlePlus);
 minus.addEventListener("click", handleMinus);