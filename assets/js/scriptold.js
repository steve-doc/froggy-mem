// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    








    // Set array variable for frog audio sounds.
    const audioList = [
        new Howl({ src: ['../assets/audio/greytree-frog.mp3']}),
        new Howl({ src: ['../assets/audio/medium-frog.mp3']}),
        new Howl({ src: ['../assets/audio/small-frog.mp3']}),
        new Howl({ src: ['../assets/audio/leopard-frog.mp3']}),
        new Howl({ src: ['../assets/audio/tree-frog.mp3']}),
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
                rules();
        }
    })
    }

});


/**
 * main game function
 */
function runGame(audioList){

    const welcome = document.getElementById("welcome-container");
    let level = parseInt(document.getElementById("level-count").innerText);
    let score = parseInt(document.getElementById("score-count").innerText);
    let lives = document.getElementById("life-count").innerText.length;
    const frogs = document.getElementsByClassName("frog");
    let frogNum = 3
    let frogSeq = []

    



    // Hide welcome container
    toggleWelcome(welcome);




    frogSeq = genSequence(frogNum); 
    console.log(frogSeq);

    playFrogSeq(frogSeq, frogs, audioList);





    // Reinstate welcome container
    setTimeout(function() { toggleWelcome(welcome); }, 5500 * frogSeq.length);


}





function listen(frogs, audioList, frogSeq, j) {
    for (let frog of frogs) {
        frog.addEventListener("click", function(e) {
            let audio = frog.getElementsByTagName("audio")[0]; 
            // let audio = audioList[frog];
            audio.currentTime = 0;
            audio.play();
            frog.classList.add("hlFrog");
            console.log("j = ",  j);
            if (frogs[frogSeq[j]] === e.target.parentElement) {
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
 * p
 * play Frogs in sequence
*/
async function playFrogSeq(frogSeq, frogs, audioList) {
        let frogDiv = null;
        let sound = null;
    for (i = 0; i < frogSeq.length; i++) {
        frogDiv = frogs[frogSeq[i]];
        sound = audioList[frogSeq[i]];
        await hlFrog(frogDiv);
        await playFrog(sound);
        await removeHlFrog(frogDiv);
    }
}

/**
 * highlight a frog
 */
async function hlFrog(frogDiv) {
    frogDiv.classList.add("hlFrog");
    await timer(500);
}

/**
 * remove highlight from a frog
 */
async function removeHlFrog(frogDiv) {
    frogDiv.classList.remove("hlFrog");
    await timer(500);
}

/** 
 * play frog sound
*/
async function playFrog(sound) {
    sound.currentTime = 0;
    sound.play();
    await timer(500)
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


function incrementScore() {

}

function decrementLives() {

}

function gameOver() {

}// Wait for the DOM to finish loading before running the game
// Get the frog elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    








    // Set array variable for frog audio sounds.
    const audioList = [
        new Howl({ src: ['../assets/audio/greytree-frog.mp3']}),
        new Howl({ src: ['../assets/audio/medium-frog.mp3']}),
        new Howl({ src: ['../assets/audio/small-frog.mp3']}),
        new Howl({ src: ['../assets/audio/leopard-frog.mp3']}),
        new Howl({ src: ['../assets/audio/tree-frog.mp3']}),
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
                rules();
        }
    })
    }

});


/**
 * main game function
 */
function runGame(audioList){

    const welcome = document.getElementById("welcome-container");
    let level = parseInt(document.getElementById("level-count").innerText);
    let score = parseInt(document.getElementById("score-count").innerText);
    let lives = document.getElementById("life-count").innerText.length;
    const frogs = document.getElementsByClassName("frog");
    let frogNum = 3
    let frogSeq = []

    



    // Hide welcome container
    toggleWelcome(welcome);




    frogSeq = genSequence(frogNum); 
    console.log(frogSeq);

    playFrogSeq(frogSeq, frogs, audioList);





    // Reinstate welcome container
    setTimeout(function() { toggleWelcome(welcome); }, 5500 * frogSeq.length);


}





function listen(frogs, audioList, frogSeq, j) {
    for (let frog of frogs) {
        frog.addEventListener("click", function(e) {
            let audio = frog.getElementsByTagName("audio")[0]; 
            // let audio = audioList[frog];
            audio.currentTime = 0;
            audio.play();
            frog.classList.add("hlFrog");
            console.log("j = ",  j);
            if (frogs[frogSeq[j]] === e.target.parentElement) {
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
 * p
 * play Frogs in sequence
*/
async function playFrogSeq(frogSeq, frogs, audioList) {
        let frogDiv = null;
        let sound = null;
    for (i = 0; i < frogSeq.length; i++) {
        frogDiv = frogs[frogSeq[i]];
        sound = audioList[frogSeq[i]];
        await hlFrog(frogDiv);
        await playFrog(sound);
        await removeHlFrog(frogDiv);
    }
}

/**
 * highlight a frog
 */
async function hlFrog(frogDiv) {
    frogDiv.classList.add("hlFrog");
    await timer(500);
}

/**
 * remove highlight from a frog
 */
async function removeHlFrog(frogDiv) {
    frogDiv.classList.remove("hlFrog");
    await timer(500);
}

/** 
 * play frog sound
*/
async function playFrog(sound) {
    sound.currentTime = 0;
    sound.play();
    await timer(500)
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


function incrementScore() {

}

function decrementLives() {

}

function gameOver() {

}