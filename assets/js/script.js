// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    



    let buttons = document.getElementsByTagName("button");
    console.log(buttons);


    // Event listeners for frogs that play audio in each div
    // let frogs = document.getElementsByClassName("frog");
    // for (let frog of frogs) {
    //     frog.addEventListener("click", function() {
    //         let audio = frog.getElementsByTagName("audio")[0];
    //         audio.currentTime = 0;
    //         audio.play();
    //         frog.classList.add("hlFrog");
    //     }) 

    //     frog.addEventListener("transitionend", function() {
    //         frog.classList.remove("hlFrog");
    //     }) 
    // }




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

    const audioList = [
        new Howl({ src: ['../assets/audio/greytree-frog.mp3']}),
        new Howl({ src: ['../assets/audio/medium-frog.mp3']}),
        new Howl({ src: ['../assets/audio/small-frog.mp3']}),
        new Howl({ src: ['../assets/audio/leopard-frog.mp3']}),
        new Howl({ src: ['../assets/audio/tree-frog.mp3']}),
      ];


    // Hide welcome container
    welcome.style.display = "none"



    // generate random numbers and add to frog play sequence array    
    for (i=0; i < frogNum; i++) {
       let num1 = Math.floor(Math.random() * frogNum) ;
       frogSeq.push(num1);
    }

    let currentAudioSequence = []
    for (i=0; i<frogSeq.length; i++) {
        currentAudioSequence.push(audioList[frogSeq[i]]);
    }

    // play frogs in sequence
    console.log(frogSeq)
    for (i = 0; i < frogSeq.length; i++) {
        console.log(frogSeq[i]);
        frogs[frogSeq[i]].classList.add("hlFrog");
        sleep(500);
        playFrog(currentAudioSequence[i]);
        frogs[frogSeq[i]].classList.remove("hlFrog");
    }

    // currentAudioSequence.forEach(s => playFrog(s));




    // Reinstate welcome container
    welcome.style.display = "flex";

}



/** 
 * play frog sound
*/
function playFrog(sound) {
    sound.currentTime = 0;
    sound.play();
    sleep(1000);
}

function hlFrog() {
    frog = document.getElementsByClassName("frog");
}

function rules() {

}


function introBox() {
    
}

function setLevel() {

}

/** 
 * create delay after playing audio to stopp sequence playing asynchonously 
 */
function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

function timer() {

}

function incrementScore() {

}

function decrementLives() {

}

function gameOver() {

}