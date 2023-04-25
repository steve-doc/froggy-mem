// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {

    // Set array variable for frog audio sounds.




    // get main menu buttons
    let buttons = document.getElementsByTagName("button");

    // set up event listeners for main menu window
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

    const welcome = document.getElementById("welcome-container");
    let level = parseInt(document.getElementById("level-count").innerText);
    let score = parseInt(document.getElementById("score-count").innerText);
    let lives = document.getElementById("life-count").innerText.length;
    let frogNum = 3
    let frogseq = []
    const frogDivs = document.getElementsByClassName("frog");
    const audioList = [
        new Howl({ src: ['../assets/audio/greytree-frog.mp3']}),
        new Howl({ src: ['../assets/audio/medium-frog.mp3']}),
        new Howl({ src: ['../assets/audio/small-frog.mp3']}),
        new Howl({ src: ['../assets/audio/leopard-frog.mp3']}),
        new Howl({ src: ['../assets/audio/tree-frog.mp3']}),
        ];

    
    // Hide welcome container
    toggleWelcome(welcome);

    frogSeq = genSequence(frogNum);   // e.g. [3, 2, 4]

    playFrogSequence(frogSeq, frogDivs, audioList)

    // wait for the user to click on frogs and check their work

    // Reinstate welcome container
    setTimeout(function() { toggleWelcome(welcome); }, 1500 * frogSeq.length);

}

function listen(frogDivs, audioList, frogSeq, j) {
    for (let frog of frogDivs) {
        frog.addEventListener("click", function(e) {
            // let audio = frog.getElementsByTagName("audio")[0]; 
            let audio = audioList[frogSeq[frog]];
            audio.currentTime = 0;
            audio.play();
            frog.classList.add("hlFrog");
            console.log("j = ",  j);
            if (frogDivs[frogSeq[j]] === e.target.parentElement) {
                console.log("correct");
                j++;
                return j;
            } else {
                console.log("wrong")
            }
        }) 

        frog.addEventListener("transitionend", function() {
            frog.classList.remove("hlFrog");
        }) 
    }
}

function playFrogSequence(frogSeq, frogDivs, audioList){
    let sequenceIndex = 0  // where we are in frogSequence

    // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    // setInterval calls the given function repeatedly every X milliseconds 
    // (300 in this case). This will repeat forever until you call clearInterval.
    // clearInterval needs the unique identifier number returned by setInterval
    const intervalId = setInterval(playNextFrogSound, 1000, frogSeq, frogDivs, audioList);
    
    function playNextFrogSound(frogSeq, frogDivs, audioList){
        // Unflash the previous flashed frog if this is not the first turn
        // we're doing this before the clearInterval check below so that we
        // catch the last flashed frog before exiting the game.
        // if (sequenceIndex > 0 && sequenceIndex <= frogSeq.length) {
        //     // get the previous frog and unflash it
        //     unFlashFrog(frogDivs, frogSeq[sequenceIndex - 1]);
        // }
        if (sequenceIndex >= frogSeq.length) {
            clearInterval(intervalId);
            return;
        }

        let frogIndex = frogSeq[sequenceIndex];
        flashFrog(frogDivs, frogIndex);
        let frogSound = audioList[frogIndex];
        frogSound.play();
        unFlashFrog(frogDivs, frogIndex);
        sequenceIndex += 1;
    }
}





/**
 * toggle welcome menu on/off 
 */
function toggleWelcome(welcome) {
    if (welcome.style.display === "none") {
        welcome.style.display = "flex";
    } else {
        welcome.style.display = "none";
    }
}

/** 
 * generate array of random numbers that will be the order the frogs 
 * will be played in.
 */
function genSequence(frogNum) {
    let frogSeq=[]
    for (i=0; i < frogNum; i++) {
        let num1 = Math.floor(Math.random() * frogNum) ;
        frogSeq.push(num1);
     }
     return frogSeq
}

/**
 * highlight a frog
 */
function flashFrog(frogDivs, frogIndex) {
    frogDivs[frogIndex].classList.add("hlFrog");

}

/**
 * remove highlight from a frog
 */
function unFlashFrog(frogDivs, frogIndex) {
    frogDivs[frogIndex].addEventListener("transitionend", function() {
    frogDivs[frogIndex].classList.remove("hlFrog");
    })
}

/**
 * set delay timer control speed of frog 
 * sequence playback
 */
function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

function rules() {

}


function introBox() {
    
}

function setLevel() {

}

function incrementScore() {

}

function decrementLives() {

}

function gameOver() {

}