// //найти элемент используя css селектор
// let sayHelloBth = document.querySelector("#say-hello");

// //изменить свойства элемента
// sayHelloBth.textContent = "SAY HELLO";
// sayHelloBth.className = "btn btn-red";
// sayHelloBth.classList.add("btn", "btn-red"); // remove, toggle

// // изменить стили элемента
// sayHelloBth.style.color = "tomato";
// sayHelloBth.style.fontSize = "20px";

// //неизменяемые свойства
// console.log(sayHelloBtn.clientTop);
// console.log(sayHelloBtn.getClientRects);

// //создание элемента
// let exampleBtn = document.createElement("button");
// // document.body.append(exampleBtn);
// document.body.append(exampleBtn);

// //удаление элемента
// exampleBtn.remove();

// //добавление слушателя событий
// sayHelloBtn.addEventlistener("click", function (event){
//   alert("Hello")
// });




//1
let btn = document.querySelector("#say-hello");
//2
btn.addEventListener("click", function () {
  btn.remove()
});
//3
let ex = ["Apples","Pears","Oranges", "Peaches"];
let ex1 = document.createElement("ul");
document.body.append(ex2)
for (let a=0; a<ex.length; a++) {
  let listItem = document.createElement("li");
  listItem.textContent = ex[a];
  ex1.append(listItem)
}



//Новая тема
// let - можно поменять
//const - постоянная - можно поменять свойство объекта

