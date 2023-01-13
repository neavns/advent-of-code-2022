import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

let ovrelapCount = 0

const getNumbersInRange = (start, end) => {
  const numbers = []
  for(let i = start; i <= end; i++) {
    numbers.push(i)
  }
  return numbers
}

for(const line of input) {
  const [firstElf, secondElf] = line.split(',')
  const [firstSection, secondSection] = [firstElf.split('-').map(n => parseInt(n)), secondElf.split('-').map(n => parseInt(n))]

  if(getNumbersInRange(firstSection[0], firstSection[1]).some(n => getNumbersInRange(secondSection[0], secondSection[1]).includes(n))) {
    ovrelapCount++
  }
}



console.log(ovrelapCount)