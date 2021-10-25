"use strict";

const titleSpan = document.querySelector('.title__span');
const color = ['#ff303b', '#44d2c1', '#4d82f6'];
const secondColor = ['#44d275', '#98eb71', '#c327fa'];

titleSpan.addEventListener("mouseover", (e) => {
    console.log("Hello");
    let randomColor = Math.floor(Math.random() * color.length);
    let randomSecondColor = Math.floor(Math.random() * secondColor.length);
    titleSpan.style.background = `linear-gradiant(0deg, ${randomColor} 0%, ${randomSecondColor} 100%)` 
})