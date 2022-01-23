function startGame() {
    updateStatus("Dont Hit The Boundaries")
}

function reset() {
    updateStatus("Begin by moving your mouse over the \"S\".")
    updateBoundaries()
    updateScore(0)
}

function win() {
    updateStatus("You Won!")
    updateBoundaries(false)
    updateScore(score + 5)
}

function lose() {
    updateStatus("You Lost!")
    updateBoundaries(true)
    updateScore(score - 10)
}

function exit() {
    updateStatus("You're Out of Bound! Go Back to start")
} 

function updateBoundaries(status) {
    var boundaries = document.getElementsByClassName("boundary")
    for ( var i = 0 ; i  < boundaries.length ; i++ ) {
        if (status === true) {
            boundaries[i].style.removeProperty("background-color")
            boundaries[i].classList.add("youlose")
        } else if (status === false) {
            boundaries[i].classList.remove("youlose")
            boundaries[i].style.backgroundColor = green_boundary_bg_color
        } else if (status === undefined) {
            boundaries[i].classList.remove("youlose")
            boundaries[i].style.backgroundColor = original_boundary_bg_color
        }
    }
}
function updateScore(score_value) {
    score = score_value
    document.getElementsByClassName("boundary example")[0].innerText = `Score: ${score}`
}

function updateStatus(text) {
    document.getElementById("status").innerText = text
}


function main() {

    document.getElementById("game").addEventListener("mouseleave", exit)

    var start = document.getElementById("start")
    start.addEventListener("mouseover", startGame)
    start.addEventListener("click", reset)

    document.getElementById("end").addEventListener("mouseover", win)

    var boundaries = document.getElementsByClassName("boundary")
    for ( var i = 0 ; i  < boundaries.length - 1 ; i++ ) {
        boundaries[i].addEventListener("mouseover", lose)
    }

    original_boundary_bg_color = window.getComputedStyle(boundaries[0]).backgroundColor
    
    var score_container = document.getElementsByClassName("boundary example")[0]
    score_container.style.padding = "5px 0 0 5px"
    updateScore(score)
}

var original_boundary_bg_color
var green_boundary_bg_color = "#27e616"
var score = 0

window.onload = main



