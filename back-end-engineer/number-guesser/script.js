let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9)
}

const compareGuesses = (userGuess, cpuGuess, target) => {
  const userDiff = Math.abs(userGuess - target)
  const cpuDiff = Math.abs(cpuGuess - target)

  if(userDiff == cpuDiff){
    return true
  } else if(userDiff < cpuDiff){
    return true
  } else{
    return false
  }
}

const updateScore = (winner) => {

  if(winner === "human"){
    humanScore++
  }
  if(winner === 'computer'){
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}
