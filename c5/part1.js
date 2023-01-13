import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8').split('\n')
const initialStackEnd = 8
const movesStart = 10
const map = {}

// create initial stacks
for(let i = 0; i < initialStackEnd; i++) {
  const row = input[i]
  let stackNumber = 1
  for(let j = 1; j < row.length; j += 4) {
    let item = row.slice(j, j+1)
    if(!map[stackNumber]) map[stackNumber] = []
    if(item !== ' ') map[stackNumber].unshift(item)
    stackNumber++
  }
}

// move stacks
for(let i = movesStart; i < input.length; i++) {
  const move = input[i]
  const [count, from, to] = move.split(' ').filter(item => !isNaN(item))
  for(let j = 0; j < count; j++) {
    const item = map[from].pop()
    map[to].push(item)
  }
}

let secretMessage = ''

for(let key in map) {
  secretMessage += map[key][map[key].length - 1]
}

// console.log(map)
console.log(secretMessage)