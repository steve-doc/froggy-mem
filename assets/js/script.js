// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let frogs = document.getElementsByClassName("frog");
    // console.log(frogs);

    for (let frog of frogs) {
        frog.addEventListener("click", function() {
            let audio = frog.getElementsByTagName("audio")[0];
            console.log(audio);
            audio.currentTime = 0;
            audio.play();
        }) 
    }
});


/**
 * main game function
 */
function runGame(){
    let level = document.getElementById("level-count").innerText.length ;
    let score = parseInt(document.getElementById("score-count").innerText);
    console.log(level, score);


}


function introBox {
    
}

function setLevel(){

}

function timer() {

}

function incrementScore() {

}

function decrementLives() {

}

function gameOver() {

}