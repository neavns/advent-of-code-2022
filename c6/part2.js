import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8')
// const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'

let buffer = ''
let currentPos = 0

for(let i = 0; i < input.length; i++) {
  if(buffer.length === 14) break
  
  const char = input[i]

  if(buffer.includes(char)) {
    buffer = ''
    currentPos++
    i = currentPos
  } else {
    buffer += char
  }

}

// currentPos + 14 unique characters + 1 (as we start at 0)
console.log(buffer, currentPos + 15)