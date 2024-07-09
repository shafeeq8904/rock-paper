const score = JSON.parse(localStorage.getItem('scores'));

      

        function reset(){
            score.wins =0;
            score.losses=0;
            score.ties=0;
            localStorage.removeItem('score')
           
            document.querySelector('.js-result').innerHTML= 'The scores has been Reset'

            document.querySelector('.js-moves').innerHTML= ''

            const ans = document.querySelector('.js-score');
            ans.innerHTML= `Wins: ${score.wins},losses: ${score.losses},ties: ${score.ties}`
        };


      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if(result === 'You win.'){
            score.wins+=1
        }
        else if(result ==='You lose.'){
            score.losses+=1
        }
        else if(result ==='Tie.'){
            score.ties+=1
        }

        /*
        localStorage is when we reload the game all the score is deleted to overcome this we use localStorage. it onky supports string
        */

        const ans = document.querySelector('.js-result');
        ans.innerHTML= result

        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins},losses: ${score.losses},ties: ${score.ties}`

        document.querySelector('.js-moves').innerHTML = ` You   
        <img src="images/${playerMove}.png" class="image ">
        <img src="images/${computerMove}.png" class="image ">
        computer`

        localStorage.setItem('scores' , JSON.stringify(score))

      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }