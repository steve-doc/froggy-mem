# Way of the Frog Memory Game

Follow the order that the frogs are played.  When you get it right your score acrues and the sequence gets longer.  Keep going until you make a mistake and try to beat your high score.

Link to [Live site](https://steve-doc.github.io/way_of_the_frog/)

## Index - Table of Contents

- [Design](#design)
    - [Wireframes](#wireframes)
    - [Font and Colours](#font-and-colour-choices)

- [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#possible-future-features)

- [UX](#ux)
    - [Site Goals](#site-goals)
    - [User Stories](#user-stories)

- [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Browser Testing](#browser-testing)
    - [Manual Testing](#manual-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)

- [Deployment](#deployment)

- [Credits](#credits)
    - [Media](#media)
    - [Code](#code)
    - [Content](#content)

## Design



### 1. Strategy
Build a simple, fun and challenging memory game that will engage the player.  The theme of the game will be a series of colourful frogs set on a lilly pond.
### 2. Scope
The player will 'listen' to frogs that will ribbet and be visulally highlighted in a random order.  The player will then have to play back, or 'follow', the same order by clicking on the frogs.  
 The game will get harder by the addition of more frogs each time the user succesfully completes the current sequence. 
 The player will accrue 1 point for every correct frog clicked.  
 The game is over when the player makes a mistake.  At this point their score will be compared to the current high score.  A different game over message will be displayed depending on whether the play fails to, equals or beats the high score.

 #### User stories
 1. I want a visually appealing game. 
 2. I want simple instructions to understand the game.
 3. Game should be intuitive to play.
 4. Game should start off easy and get harder as I progress.
 5. There should be a clear scoring system.
 6. I should be able to track and beat a high score.
 
### 3. Structure
A simple one page structure will be used.  A game menu will be displayed to begin with offering the player the opportunity to play
4. Skeleton
5. Surface

Credit
Pond background image - https://www.vecteezy.com/vector-art/521836-a-pond-with-many-plants 
frog sounds - https://quicksounds.com/search/filter/tracks/frog and edited with Vector 2 Exress

bugs

1. Intermittent on click audio bug not playing audio
2. When playing audio sequence if there are repeats of the same audio it will only play the audio once.
3. Score incrementing by multiples after first game.  Event listeners getting added again.