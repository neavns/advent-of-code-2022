import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

let ovrelapCount = 0

for(const line of input) {
  const [firstElf, secondElf] = line.split(',')
  const [firstSection, secondSection] = [firstElf.split('-').map(n => parseInt(n)), secondElf.split('-').map(n => parseInt(n))]

  if(firstSection[0] <= secondSection[0] && firstSection[1] >= secondSection[1] 
    || secondSection[0] <= firstSection[0] && secondSection[1] >= firstSection[1]) {
    ovrelapCount++
  }
}

console.log(ovrelapCount)