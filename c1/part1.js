import fs from 'fs'

const input = fs.readFileSync('input.txt', 'utf8')
const calories = input.split('\n')
let max = 0
let current = 0

for(let i = 0; i < calories.length; i++) {
  if(calories[i]) {
    current += parseInt(calories[i])
  } else {
    max = Math.max(max, current)
    current = 0
  }
}

console.log(max)