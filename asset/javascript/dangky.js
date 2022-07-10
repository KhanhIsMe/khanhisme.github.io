const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const Main = this.document.querySelector(".clearfix");
const Dangnhap = document.querySelector(".submit");
let x = 580;
let y = 0;
next.addEventListener("click" , function(){
    Main.style = `transform: translateX(-580px)`;
})
prev.addEventListener("click" , function(){
    Main.style = `transform: translateX(0px)`;
})
Dangnhap.addEventListener("click", function(){
    var z = document.getElementById("email").innerHTML;
    alert("xin chào");
    console.log(z);
})