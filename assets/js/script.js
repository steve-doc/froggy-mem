// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    


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


});


/**
 * main game function
 */
function runGame(){

    let welcome = document.getElementById("welcome-container");
    let level = parseInt(document.getElementById("level-count").innerText);
    let score = parseInt(document.getElementById("score-count").innerText);
    let lives = document.getElementById("life-count").innerText.length;
    let frogs = document.getElementsByClassName("frog");
    let frogNum = 3
    let frogSeq = []
    // console.log(welcome);
    // console.log("level: ", level);
    // console.log("Score: ", score,);
    // console.log("Lives: ", lives);
    // console.log("Frog number: ", frogNum);
    console.log("FrogSeq: ", frogSeq);

    // Hide welcome container
    welcome.style.display === "none"

    // Event listeners for frogs that play audio in each div
    for (let frog of frogs) {
        frog.addEventListener("click", function() {
            let audio = frog.getElementsByTagName("audio")[0];
            audio.currentTime = 0;
            audio.play();
        }) 
    }

    // generate random numbers and add to frog play sequence array    
    for (i=0; i < frogNum; i++) {
       let num1 = Math.floor(Math.random() * frogNum) ;
       console.log(num1);
       frogSeq.push(num1);
    }
    console.log(frogSeq)

    // play frogs in sequence

    for (let frogNum of frogSeq) {
    
        setTimeout(playFrog(frogNum), 1000); 
    }


    // Reinstate welcome container
    welcome.style.display === "block"

}

function playFrog(frogNum) {
    let frogs = document.getElementsByClassName("frog");
    let nextFrog = frogs[frogNum].getElementsByTagName("audio")[0];
    nextFrog.play();
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