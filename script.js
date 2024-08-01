let left_a = document.querySelector(".left span");
let right_a = document.querySelector(".right span");

let righth1 = document.querySelector(".right .flex h1");
let lefth1 = document.querySelector(".left .flex h1");

let right = document.querySelector(".right");
let left = document.querySelector(".left");

let left_b = document.querySelector(".left button");
let right_b = document.querySelector(".right button");

let totalapples = 10;
let rightapple = 0;
let leftapple = totalapples - rightapple;

left_a.innerHTML = leftapple;
right_a.innerHTML = rightapple;

function greenleft(){
    if(leftapple === 10){
        left.style.borderColor = "green";
    }else{
        left.style.borderColor = "none";
    }
}
//greenleft();

function updateBorderColor() {
    if (leftapple < 0) {
        left.style.borderColor = "black";
    }
     else {
        left.style.borderColor = ""; // Reset border color if not negative
    }
}

function updateBorderright() {
    if (rightapple < 0) {
        right.style.borderColor = "black";
    } else {
        right.style.borderColor = ""; // Reset border color if not negative
    }
}

function borderleftColor() {
    if (leftapple === 0) {
        left.style.borderColor = "red";
        right.style.borderColor = "green";
    } else {
        right.style.borderColor = "black";
        left.style.borderColor = "black"; // Reset border color if not negative
    }
}
borderleftColor();

function borderright() {
    if (rightapple === 0) {
        right.style.borderColor = "red";
        left.style.borderColor = "green";
    } else {
        left.style.borderColor = "black";
        right.style.borderColor = "black"; // Reset border color if not negative
    }
}
borderright();

function right2(){
    if(rightapple > 1){
        righth1.innerText = "Apples";
    }else{
        righth1.innerText = "Apple";
    }
}
//right2();

function left2(){
    if(leftapple > 1){
        lefth1.innerText = "Apples";
    }else{
        lefth1.innerText = "Apple";
    }
}
left2();


left_b.addEventListener("click", () =>{
   if(rightapple > 0){
    leftapple++
    left_a.innerHTML = leftapple;
    rightapple--
    right_a.innerHTML = rightapple;


    left2();
    right2();
    borderright();
    updateBorderColor();
    greenleft();
   }
   else{
    right.style.borderColor = "red";
    alert("You Have No Apples on The Right Side!")
}
})

right_b.addEventListener("click", () =>{
    if(leftapple > 0){
     leftapple--
     left_a.innerHTML = leftapple;
     rightapple++
     right_a.innerHTML = rightapple;

    left2();
    right2();
     updateBorderright();
     borderleftColor();
     greenleft();
    }
    else{
        left.style.borderColor = "red";
        alert("You Have No Apples on The Left Side!")
    }
 })

 greenleft();