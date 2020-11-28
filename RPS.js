const div = document.querySelector('div');
u = 0;
c = 0;
finalResult = 0;
rounds = 0;

endResult = '';

playAgain = document.querySelector('#playAgain');
playAgain.classList.add('playAgain');

if (playAgain.style.display === 'none') {
  playAgain.style.display = 'block';
}
else {
  playAgain.style.display = 'none';
}

function computerPlay() {
  computer = Math.floor(Math.random()*3);
  if (computer === 0) {
    return 'rock';
  }
  else if (computer === 1) {
    return 'paper';
  }
  else if (computer === 2) {
    return 'scissors';
  }
}

function player(playerSelection) {
  computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    u++;
	c++;
	endResult = "It's a tie";
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    c++;
	endResult = "You lose! Paper beats rock.";
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    u++;
	endResult = "You win! Paper beats rock.";
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    u++;
	endResult = "You Win! Rock beats scissors.";
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    c++;
	endResult = "You lose! Rock beats scissors.";
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    c++;
	endResult = "You lose! Scissors beats paper.";
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    u++;
	endResult = "You win! Scissors beats paper.";
  }
}



function result() {
  btnEnable.appendChild(endOfRoundResult);	  
  btnEnable.appendChild(score);	
  score.textContent = 'Player: ' + u + ' Computer: ' + c;
  endOfRoundResult.textContent = endResult;
  if (finalResult === rounds) {
    if (btnEnable.style.display === 'none') {
      btnEnable.style.display = 'block';
    }
    else {
      btnEnable.style.display = 'none';
    }
    endGame = document.createElement('h1');
    endGame.classList.add('endGame');
    if (u > c) {
      endGame.textContent = 'You won the game! The score is ' + u + ' to ' + c;
    }
    else if (c > u) {
      endGame.textContent = 'You lost the game! The score is ' + u + ' to ' + c;
    }
    else if (c === u) {
      endGame.textContent = 'You tied the computer! The score is ' + u + ' to ' + c;
    }
    end.appendChild(endGame);
    if (playAgain.style.display === 'none') {
      playAgain.style.display = 'block';
    }
    else {
      playAgain.style.display = 'none';
    }
    playAgain.addEventListener('click', refresh);
    playAgain.style = 'text-align = center';
  }
}

endOfRoundResult = document.createElement('h1');
endOfRoundResult.classList.add('endOfRoundResult');

score = document.createElement('h2');
score.classList.add('h2');

function removeRoundsDisplay() {
  numberOfRounds = document.querySelector('#numberOfRounds');
  if (numberOfRounds.style.display === 'none') {
    numberOfRounds.style.display = 'block';
  }
  else {
    numberOfRounds.style.display = 'none';
  }
}

function total() {
  finalResult++;
}

function refresh() {
  window.location.reload(true);
}

const threeRounds = document.querySelector('#threeRounds');
threeRounds.addEventListener('click', () => {removeRoundsDisplay();});
threeRounds.addEventListener('click', () => {rounds = 3;});

const fiveRounds = document.querySelector('#fiveRounds');
fiveRounds.addEventListener('click', () => {removeRoundsDisplay();});
fiveRounds.addEventListener('click', () => {rounds = 5;});

const tenRounds = document.querySelector('#tenRounds');
tenRounds.addEventListener('click', () => {removeRoundsDisplay();});
tenRounds.addEventListener('click', () => {rounds = 10;});

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {player('rock')});
rock.addEventListener('click', () => {total();});
rock.addEventListener('click', () => {result();});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {player('paper')});
paper.addEventListener('click', () => {total();});
paper.addEventListener('click', () => {result();});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {player('scissors')});
scissors.addEventListener('click', () => {total();});
scissors.addEventListener('click', () => {result();});


