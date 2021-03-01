`use strict`;

let SecretNumber = Math.trunc(Math.random() * 20) + 1; //math.random() gives a random value bw 0 and 1,*20 makes therange from 0-19.and trunc removes the decimal part,+1 is to make the range upto 20

let score = 20; //initial score

let highScore=0;//initial highScore

const DisplayMessage=function(message)
{
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'please enter a valid number!';
  }
   else if (guess === SecretNumber) {
     if(score>highScore)
     {
       highScore=score;
       document.querySelector('.highscore').textContent=highScore;
     }
    DisplayMessage('Awesome!!!');

    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor='rgba(80, 255, 80, 0.548)';

    document.querySelector('.number').style.width='30rem';
  }
   else if (guess != SecretNumber) {
    if (score > 1) {
     // document.querySelector('.message').textContent = guess>SecretNumber?'Too high...':'Too low...';
     //using display function
     DisplayMessage(guess>SecretNumber?'Too high...':'Too low...');
      score--; //decrease score if guess not right
      document.querySelector('.score').textContent = score;
    }
     else {
      DisplayMessage('You Lost!!!');
      document.querySelector('.score').textContent = 0;
    }
  } 
});

document.querySelector('.again').addEventListener('click',function(){
  score=20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent=score;
  document.querySelector('body').style.backgroundColor=' rgb(7, 7, 7)';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
  DisplayMessage('start guessing...');
});
