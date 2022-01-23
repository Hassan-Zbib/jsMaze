function startGame() {
 
}

function reset() {

}

function win() {

}

function lose() {

}

function exit() {

}


function main() {

    document.getElementById("game").addEventListener("mouseleave", exit)

    var start = document.getElementById("start")
    start.addEventListener("mouseover", startGame)
    start.addEventListener("click", reset)

    document.getElementById("end").addEventListener("mouseover", win)

    var boundaries = document.getElementsByClassName("boundary")
    for ( var i = 0 ; i  < boundaries.length ; i++ ) {
        boundaries[i].addEventListener("mouseover", lose)
    }
    
    var score = 0
    var score_container = document.getElementsByClassName("boundary example")[0]
    score_container.style.padding = "5px 0 0 5px"
    score_container.innerHTML = `your score: ${score}`

}

window.onload = main;



