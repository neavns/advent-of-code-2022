import fs from 'fs'

const input = fs.readFileSync('input.txt', 'utf8')
const calories = input.split('\n')
let current = 0
let topThree = []

for(let i = 0; i < calories.length; i++) {
  if(calories[i]) {
    current += parseInt(calories[i])
    continue
  } 

  if(topThree.some((num) => num < current)) {
    topThree.unshift(current)
    topThree = topThree.sort((a,b) => b - a).slice(0, 3)
  }
  current = 0
}

const total = topThree.reduce((acc, prev) => acc += prev)
console.log(total)
