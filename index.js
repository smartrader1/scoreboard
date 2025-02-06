let homeScore = document.getElementById("homescore")
let homeOne = document.getElementById("home1")
let homeTwo = document.getElementById("home2")
let homeThree = document.getElementById("home3")
let guestScore = document.getElementById("guestscore")
let guestOne = document.getElementById("guest1")
let guestTwo = document.getElementById("guest2")
let guestThree = document.getElementById("guest3")

score = 0
score2 = 0


function addone() {
    score += 1
    homeScore.innerText = score
}

function addtwo() {
    score += 2
    homeScore.innerText = score
}

function addthree() {
    score += 3
    homeScore.innerText = score
}


function addone1() {
    score2 += 1
    guestScore.innerText = score2
}

function addtwo1() {
    score2 += 2
    guestScore.innerText = score2
}

function addthree1() {
    score2 += 3
    guestScore.innerText = score2
}

