function startGame() {
    updateStatus("Dont Hit The Boundaries")
    controlEventListeners(true)
}

function reset() {
    updateStatus("Begin by moving your mouse over the \"S\".")
    updateBoundaries()
    controlEventListeners(true)
    updateScore(0)
}

function win() {
    updateStatus("You Won!")
    updateBoundaries(false)
    controlEventListeners(false)
    updateScore(score + 5)
}

function lose() {
    updateStatus("You Lost!")
    updateBoundaries(true)
    controlEventListeners(false)
    updateScore(score - 10)
}

function exit() {
    updateStatus("You're Out of Bound! Go Back to start")
    controlEventListeners(false)
} 

function updateScore(score_value) {
    score = score_value
    document.getElementsByClassName("boundary example")[0].innerText = `Score: ${score}`
}

function updateStatus(text) {
    document.getElementById("status").innerText = text
}

function updateBoundaries(status) {
    var boundaries = document.getElementsByClassName("boundary")
    for ( var i = 0 ; i  < boundaries.length -1 ; i++ ) {
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

function controlEventListeners(add) {

    var boundaries = document.getElementsByClassName("boundary")

    if (add === true) {
        
        document.getElementById("game").addEventListener("mouseleave", exit)

        document.getElementById("end").addEventListener("mouseover", win)

        for ( var i = 0 ; i  < boundaries.length - 1 ; i++ ) {
            boundaries[i].addEventListener("mouseover", lose)
        }
    } else {

        
        document.getElementById("game").removeEventListener("mouseleave", exit)

        document.getElementById("end").removeEventListener("mouseover", win)

        for ( var i = 0 ; i  < boundaries.length - 1 ; i++ ) {
            boundaries[i].removeEventListener("mouseover", lose)
        }

    }


}

function main() {

    var start = document.getElementById("start")
    start.addEventListener("mouseover", startGame)
    start.addEventListener("click", reset)

    
    var score_container = document.getElementsByClassName("boundary example")[0]
    score_container.style.padding = "5px 0 0 5px"
    updateScore(score)
}

var original_boundary_bg_color = "#eeeeee"
var green_boundary_bg_color = "#27e616"
var score = 0

window.onload = main



