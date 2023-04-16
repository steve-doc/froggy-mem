// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    
    let frogs = document.getElementsByClassName("frog");

    let buttons = document.getElementsByTagName("button");
    console.log(buttons);

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play") {
                console.log(this.innerText);
                runGame();
            } else  {
                rules();
        }
    })
    }

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
    let level = parseInt(document.getElementById("level-count").innerText);
    let score = parseInt(document.getElementById("score-count").innerText);
    let lives = document.getElementById("life-count").innerText.length;
    console.log(level, score, lives);


}

function rules() {

}


function introBox() {
    
}

function setLevel() {

}

function timer() {

}

function incrementScore() {

}

function decrementLives() {

}

function gameOver() {

}