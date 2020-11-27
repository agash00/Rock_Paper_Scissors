const div = document.querySelector('div');
u = 0;
c = 0;

endResult = '';

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

function game() {
	
	for (i = 1; i <= 5; i++) {
		user = prompt('Rock, Paper or Scissors?');
		playerSelection = user.toLowerCase();
		computerSelection = computerPlay();
		alert(player(playerSelection, computerSelection));
		alert('The score is ' + u + ' to ' + c);
	}
	if (u > c) {
		alert('You won the game! The score is ' + u + ' to ' + c);
	}
	else if (c > u) {
		alert('You lost the game! The score is ' + u + ' to ' + c);
	}
	else if (c === u) {
		alert('You tied the computer! The score is ' + u + ' to ' + c);
	}
	
}

function result() {
	score.textContent = 'Player: ' + u + ' Computer: ' + c;
	endOfRoundResult.textContent = endResult;
}

endOfRoundResult = document.createElement('h1');
endOfRoundResult.classList.add('endOfRoundResult');

score = document.createElement('h2');
score.classList.add('h2');


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {player('rock')});
rock.addEventListener('click', () => {result();});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {player('paper')});
paper.addEventListener('click', () => {result();});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {player('scissors')});
scissors.addEventListener('click', () => {result();});

div.appendChild(endOfRoundResult);
div.appendChild(score);
