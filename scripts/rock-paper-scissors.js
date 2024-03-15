let score = JSON.parse(localStorage.getItem('score')) ||  {
  win:0,
  loose:0,
  tie:0
}

/* if (score === null) {

  score = {
      win:0,
      loose:0,
      tie:0
  }
}
*/



updatescoreElement();



function playgame(playerChoice) {

  const computerChoice = pickcomputermove();
  let result='';

  if(playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
      result='you loose';

      }
      else if(computerChoice === 'paper') {
      result='you won';
     
      }
      else if(computerChoice === 'scissors') {
      result='Tie';

      }
  }else if(playerChoice === 'paper') {
      if(computerChoice === 'rock') {
      result ='you won';

      }else if(computerChoice === 'paper') {
      result='Tie';

      }else if(computerChoice === 'scissors') {
      result='you loose';

      }
  }else if(playerChoice === 'rock') {
      if (computerChoice === 'rock') {
      result='Tie';

      }
      else if(computerChoice === 'paper') {
      result='you loose';

      }
      else if(computerChoice === 'scissors') {
      result='you won';
      }
  }


  if (result === 'you won') {
      score.win += 1;
  }else if (result === 'you loose') {
      score.loose += 1;
  }else if(result === 'Tie') {
      score.tie += 1;
  }

  updatescoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You 
  <img class="move" src="images/${playerChoice}-emoji.png">
  <img class="move" src="images/${computerChoice}-emoji.png">
  Computer`;


  localStorage.setItem('score',JSON.stringify(score));

  /*
  alert(`your ${playerChoice} ,computer ${computerChoice},${result}!
win:${score.win},loose:${score.loose},.Tie:${score.tie} `);
*/
}



function pickcomputermove() {

  let computerChoice='';
  const randomChoice=Math.random();

  if (randomChoice >= 0 && randomChoice < 1/3) {
  computerChoice='rock';
  }
  else if(randomChoice >= 1/3 && randomChoice <2/3) {
  computerChoice='paper';
  }
  else if(randomChoice >=2/3 && randomChoice < 1) {
  computerChoice='scissors';
  }

  return computerChoice;
}

function updatescoreElement() {

document.querySelector('.js-score').innerHTML=`Wins: ${score.win}, Looses: ${score.loose}, Tie: ${score.tie}`;

}

function clearresultANDmoves() {

document.querySelector('.js-moves').innerHTML = '';
document.querySelector('.js-result').innerHTML = '';

}   




