// Script for navigation bar

let bar=document.querySelector("#bar");
let navBar =document.querySelector(".nav-bar-list")
let close=document.querySelector("#close")

// console.log(navBar);

if(bar){
  bar.addEventListener("click",()=>{
    navBar.classList.add("active")
  })
};

if(close){
    close.addEventListener("click",()=>{
      navBar.classList.remove("active")
    })
  };
