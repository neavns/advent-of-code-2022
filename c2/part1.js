import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

/**
 * A / X = rock
 * B / Y = paper
 * C / Z = scissors
 * 
 * DRAW = 3 points
 * WIN = 6 points
 * LOSE = 0 points
 * 
 * SCORE = ROUND OUTCOME + MOVE POINTS
 */

const shapes = {
  X: {
    name: 'rock',
    points: 1
  },
  Y: {
    name: 'paper',
    points: 2
  },
  Z: {
    name: 'scissors',
    points: 3
  },
  A: {
    name: 'rock',
  },
  B: {
    name: 'paper',
  },
  C: {
    name: 'scissors',
  },
}
// [opponent]-[me]
const combinations = {
  'rock-rock': 3,
  'rock-paper': 6,
  'rock-scissors': 0,
  'paper-rock': 0,
  'paper-paper': 3,
  'paper-scissors': 6,
  'scissors-rock': 6,
  'scissors-paper': 0,
  'scissors-scissors': 3
}

let score = 0

const updateScore = (opponent, me) => {
  const combination = `${shapes[opponent].name}-${shapes[me].name}`
  score += combinations[combination] + shapes[me].points
}

for(let i = 0; i < input.length; i++) {
  const [opponent, me] = input[i].split(' ')
  updateScore(opponent, me)
}
console.log(score)