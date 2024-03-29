# exciting-adventure-game

Click [here](https://saeideh-bahadoran.github.io/exciting-adventure-game/) to see deployed game

# Description

- It's a 2D Top-Down game.
- The player has gone on an adventure trip.
- He must pick all of the potatoes to win.
- It's getting dark and the timing of doing this is very important => The faster the better.
- But there are some poisonous potatoes among the potatoes he wants to pick.
- For every poisoned potato he picks, he loses one life.
- there are some lovely potatoes among the potatoes as well that increase the life.
- He has a total of three lives and if his life reaches zero, he loses.
- The game score is the time when the player was able to collect all of the potatoes.
- Player scores will be recorded.

# Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Local Storage
- JS Audio() and JS Image()

# MVP
MVP definition here, list of minimum features
- Start screen
- game Screen with normal and poisonous potatoes
- game over screen with restart button

# Backlog
- introduction button
- Soundon/off button
- local storage to save last scores
- add lovely potatos to give life 

# Data structure

Global functions:
       -startGame()
       -showIntro()
Classes: 
- Game
    Functions:
      -start()
      -play()
      -goToEndScreen()
      
- Player
     Functions:
      -render()
      -move()
      -didCollideWithItem()
  
- Potato
  Global functions:
      -findRandomPlace()
      -isColliding()
  Functions:
      -createPotato()
      

# States
- Splash
- Game
- Gameover



# Links
- [Trello Link](https://trello.com/b/nNwwifHS/exciting-adventure-game)

- [Slides Link](https://www.canva.com/design/DAGA4NOGR4o/yOisxmRKTTWuSGSsw6tYpg/edit?utm_content=DAGA4NOGR4o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- [Github repository Link](https://github.com/Saeideh-Bahadoran/exciting-adventure-game)
- [Deployment Link] ( https://saeideh-bahadoran.github.io/exciting-adventure-game/)




