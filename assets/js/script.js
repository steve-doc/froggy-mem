// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them


/**
 * initialise game, declare required global variables and set correct status of html elements before game starts
 */
const score = document.getElementById("score-count");
const highScore = document.getElementById("high-score-count");
const frogDivs = document.getElementsByClassName("frog");
const menu = document.getElementById("menu-container");
const rules = document.getElementById("rules");
const follow = document.getElementById("follow");
const listen = document.getElementById("listen");
const cover = document.getElementById("cover");
const gameOverMessage = document.getElementById("game-over"); 
score.innerHTML = 0;
let currentScore = 0;
let bestScore = 0;
gameOverMessage.style.display = "none";
listen.style.display = "none";
follow.style.display = "none";
rules.style.display = "none";
cover.style.display = "block";


// make sure dom content loaded before contining to game.
document.addEventListener("DOMContentLoaded", function () {

    // create an array of the audio files associated with each frog
    const audioList = [
        new Howl({ src: ['assets/audio/greytree-frog.mp3']}),
        new Howl({ src: ['assets/audio/medium-frog.mp3']}),
        new Howl({ src: ['assets/audio/small-frog.mp3']}),
        new Howl({ src: ['assets/audio/leopard-frog.mp3']}),
        new Howl({ src: ['assets/audio/tree-frog.mp3']}),
        ];

  
    // get main menu buttons
    let buttons = document.getElementsByTagName("button");

    // set up event listeners for main menu window
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play") {
                console.log(this.innerText);
 
                runGame(audioList);
            } else  {
                showRules();
        }
    })
    }

    // set up event listener to clear rules div and return to menu
    rules.addEventListener("click", function() {
        toggleBanner(rules);
        toggleWelcome(menu);
    })

    // set up event listener to clear gameOver message and return to menu
    gameOverMessage.addEventListener("click", function() {
        toggleBanner(gameOverMessage);
        toggleWelcome(menu);
    })

    // set up event listeners for each frog
    let j = 0
    for (let frog of frogDivs) {
        frog.addEventListener("click", function(e) {
            // assign audio object to each frog eventlistener so it plays audio on click
            let audio = frog.getElementsByTagName("audio")[0]; 
            audio.currentTime = 0;
            audio.play();
            // check clicked frog to each frog in sequence and iterate through sequence
            frog.classList.add("hlFrog");
                if (frogDivs[frogSeq[j]] === e.target.parentElement) {
            console.log("correct");
            // update score on successful match
            incrementScore();
            j++;
            // check for end of sequence and move on to next round
            if (j >= frogSeq.length) {
                frogSeq = genSequence(frogSeq);
                setTimeout(playFrogSequence, 1000, frogSeq, frogDivs, audioList)
                j = 0;
            }
        } else { // if incorrect frog clicked calls gameover function
            frog.classList.remove("hlFrog");
            j = 0
            gameOver();
        }
        }) 

        // remove highlight class from frog on audio ended event
        frog.addEventListener("ended", function() {
            frog.classList.remove("hlFrog");
        }) 
    }
});

/**
 * main game function
 */
function runGame(audioList){

    // Hide menu container
    toggleWelcome(menu);
    
    // initialise new game
    frogSeq = initGame();

    // play the frogs in the sequence generated above
    playFrogSequence(frogSeq, frogDivs, audioList)

}
 /**
  * reset variables and generate first frog sequence
  */
function initGame() {
    score.innerHTML = 0;
    currentScore = 0;
    let frogSeq = []
    for (i = 0; i < 3; i++) {
        frogSeq = genSequence(frogSeq);
    }
    return frogSeq
}

/**
 * function to play sequence of frogs to player
 */
function playFrogSequence(frogSeq, frogDivs, audioList){
    let sequenceIndex = 0  // where we are in frogSequence
    follow.style.display = "none";
    listen.style.display = "block";
    cover.style.display = "block";

    // setInterval calls the given function repeatedly every X milliseconds 
    // This will repeat forever until clearInterval is called.
    const intervalId = setInterval(playNextFrogSound, 1000, frogSeq, frogDivs, audioList);
    
}

/**
 * plays next frog in sequence until end of sequence
 */
function playNextFrogSound(frogSeq, frogDivs, audioList){

    if (sequenceIndex >= frogSeq.length) {
        clearInterval(intervalId);
        listen.style.display = "none";
        follow.style.display = "block";
        cover.style.display = "none";
        return;
    }

    let frogIndex = frogSeq[sequenceIndex];
    flashFrog(frogDivs, frogIndex);
    let frogSound = audioList[frogIndex];
    frogSound.play();
    unFlashFrog(frogDivs, frogIndex);
    sequenceIndex += 1;

}

/**
 * toggle menu menu visibility on/off 
 */
function toggleWelcome(menu) {
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

/**
 * toggle message banner visibility on/off
 */
function toggleBanner(banner) {
    console.log(banner);
    if (banner.style.display === "none") {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

/** 
 * generate array of random numbers that will be the order the frogs 
 * will be played in.
 */
function genSequence(frogSeq) {
        let num1 = Math.floor(Math.random() * 5) ;
        frogSeq.push(num1);     
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

/**
 * hides menu and unhides rules div
 */
function showRules() {
    toggleWelcome(menu);
    toggleBanner(rules);
}

/**
 * add one to score and update dom
 */
function incrementScore() {
    currentScore++;
    score.innerHTML = currentScore;
}

/**
 * updates gameover div with different gameover messages depending on score compared to high score
 */
function gameOver() {
    listen.style.display = "none";
    follow.style.display = "none";
    cover.style.display = "block";
    gameOverMessage.innerHTML = "";
    let message = null
    if (currentScore > bestScore) {
        let scoreImprove = currentScore - bestScore;
        bestScore = currentScore;
        message = `<h2>Game Over!</h2><br><h3>Congratulations, you beat your previous High Score by ${scoreImprove}. <br>The new High Score is ${bestScore}. <br>This is The Way!</h3>`;
        setGameOverMessage(message);
        highScore.innerHTML = bestScore;
    } else if (currentScore === bestScore){
        message = `<h2>Game Over!</h2><br><h3>Pretty good, you equalled your High Score of ${bestScore}. <br>Let's try a little harder next time.<br>This is The Way!</h3>`;
        setGameOverMessage(message);
    } else {
        let scoreMiss = bestScore - currentScore
        message = `<h2>Game Over!</h2><br><h3>Well that's a little dissapointing, <br>you missed your high score by ${scoreMiss}. <br>Time for Maximum Effort!<br>This is The Way!</h3>`;
        setGameOverMessage(message);
    }

}

/**
 * called by gameOver function to push mesage to dom
 */
function setGameOverMessage(message) {
    toggleBanner(gameOverMessage);
    gameOverMessage.innerHTML = message;
}