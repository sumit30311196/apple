let left_a = document.querySelector(".left span");
let right_a = document.querySelector(".right span");

let righth1 = document.querySelector(".right .flex h1");
let lefth1 = document.querySelector(".left .flex h1");

//righth1.innerText = "jhdfjhhdj";

let right = document.querySelector(".right");
let left = document.querySelector(".left");

let left_b = document.querySelector(".left button");
let right_b = document.querySelector(".right button");

let totalapples = 10;
let rightapple = 0;
let leftapple = totalapples - rightapple;

left_a.innerHTML = leftapple;
right_a.innerHTML = rightapple;

function updateBorderColor() {
    if (leftapple < 0) {
        left.style.borderColor = "black";
    } else {
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
    } else {
        left.style.borderColor = "black"; // Reset border color if not negative
    }
}
borderleftColor();

function borderright() {
    if (rightapple === 0) {
        right.style.borderColor = "red";
    } else {
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
   }else{
    right.style.borderColor = "red";
    //alert("You have no apples on the right side!")
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
    }
    else{
        left.style.borderColor = "red";
    }
 })
































// let leftp = document.getElementById("leftp");
// let rightp = document.getElementById("rightp");

// let l_b = document.querySelector(".left button");
// let r_b = document.querySelector(".right button");

// let totalapple = 10;

// let rightapple = 0;
// let leftapple = totalapple - rightapple;

// leftp.innerText = leftapple;
// rightp.innerHTML = rightapple;


// l_b.addEventListener("click", () =>{
//     if(rightapple > 0){
//         leftapple++;
//         leftp.innerHTML = leftapple;
//         rightapple--;
//         rightp.innerHTML = rightapple;
//     }else{
//         alert("End");
//     }
// })

// r_b.addEventListener("click", () =>{
//     if(leftapple > 0){
//         rightapple++;
//         rightp.innerHTML = rightapple;
//         leftapple--;
//         leftp.innerHTML = leftapple;
//     }else{
//         alert("End")
//     }
// })






















// const totalapple = 10;

// let secondbusketapple = 0;
// let firstbusketapple = totalapple - secondbusketapple;

// leftp.innerText = totalapple;
// rightp.innerText = secondbusketapple;


// lrftb.addEventListener("click", () =>{
//     if (secondbusketapple > 0) {
//         secondbusketapple--
//         leftp.innerHTML = secondbusketapple;
//         firstbusketapple++
//         rightp.innerHTML = firstbusketapple;
//     }else{
//         alert("End")
//     }
// })
// rightb.addEventListener("click", () =>{
//   if(firstbusketapple > 0){
//     firstbusketapple--
//     leftp.innerText = firstbusketapple;
//     secondbusketapple++
//     rightp.innerText = secondbusketapple;
//   }else{
//     alert("End")
//     }
// })


