let firstNum = 0
let secondNum = 0

let first = document.getElementById("first") 
let second = document.getElementById("second")



first.innerText = firstNum
second.innerText = secondNum

function homeOne(){
    firstNum += 1
    first.innerText = firstNum
}

function homeTwo(){
    firstNum += 2
    first.innerText = firstNum
}

function homeThree(){
    firstNum += 3
    first.innerText = firstNum
}

function guestOne(){
    secondNum += 1
    second.innerText = secondNum
}

function guestTwo(){
    secondNum += 2
    second.innerText = secondNum
}

function guestThree(){
    secondNum += 3
    second.innerText = secondNum
}