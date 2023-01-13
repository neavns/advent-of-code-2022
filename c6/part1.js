import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8')

let charsProcessed = 0
let buffer = ''

for(let i = 0; i < input.length; i++) {
  if(buffer.length === 4) break
  
  const char = input[i]

  if(buffer.includes(char)) {
    buffer = char
  } else {
    buffer += char
  }

  charsProcessed++
}

console.log(buffer, charsProcessed)