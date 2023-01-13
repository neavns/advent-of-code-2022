import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

const shapes = {
  X: 1,
  Y: 2,
  Z: 3,
}

const combinations = {
  'A-X': 3,
  'A-Y': 6,
  'A-Z': 0,
  'B-X': 0,
  'B-Y': 3,
  'B-Z': 6,
  'C-X': 6,
  'C-Y': 0,
  'C-Z': 3
}

/**
 * X = lose
 * Y = draw
 * Z = win
 */
const game = {
  X: 0,
  Y: 3,
  Z: 6
}
let score = 0

const updateScore = (opponent, roundState) => {
  let myShape = getMyShape(opponent, game[roundState])
  score += game[roundState] + shapes[myShape]
}

const getMyShape = (opponentShape, roundState) => {
  for(let [k,v] of Object.entries(combinations)) {
    if(k.includes(opponentShape) && v === roundState) {
      return k.charAt(k.length - 1)
    }
  }
}

for(let i = 0; i < input.length; i++) {
  const [opponent, roundState] = input[i].split(' ')
  updateScore(opponent, roundState)
}
console.log(score)