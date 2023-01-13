import fs from 'fs'
const input = fs.readFileSync('input.txt', 'utf8').split('\n')
// const input = fs.readFileSync('tinput.txt', 'utf8').split('\n')

const map = {}
const stack = []

const execute = (cmd, index) => {
  const [_, command, path] = cmd.split(' ')
  switch(command) {
    case 'cd': cd(path); break;
    case 'ls': {
      const contents = ls(index)
      const fileSize = calculateDirSize(contents)
      const currentDir = stack[stack.length - 1]
      if(map[currentDir]) {
        map[currentDir].size = (map[currentDir].size || 0) + fileSize
      } else {
        map[currentDir] = {
          size: fileSize,
        }
      }
    }; break;
    default: break;
  }
}

const cd = path => {
  if(path === '..') {
    stack.pop()
  } else {
    stack.push(path)
  }
}

const ls = index => {
  let dirContents = []
  for(let i = index + 1; i < input.length; i++) {
    const item = input[i]
    if(item.startsWith('$')) break
    dirContents.push(item)
  }

  return dirContents
}

const calculateDirSize = (files) => {
  let total = 0
  files.forEach(file => {
    if(file.includes('dir')) {
      const dir = file.split(' ')[1]
      const currentDir = stack[stack.length - 1]
      if(map[currentDir]) {
        const currentDirChildren = map[currentDir].directories || []
        map[currentDir].directories = [...currentDirChildren, dir]
      } else {
        map[currentDir] = {
          directories: [dir],
        }
      }
    } else {
      total += Number(file.split(' ')[0])
    }
  })

  return total;
}

const updateParent = () => {
  const reversedKeys = Object.keys(map).reverse()
  for(let key of reversedKeys) {
    const dir = map[key]
    if(!dir.directories) continue

    dir.directories.forEach(d => {
      const childDir = map[d]
      dir.size += childDir?.size || 0
    })
  }
}

const sum = () => {
  const target = 100000
  const sizes = Object.values(map).map(d => d.size).sort((a, b) => a - b)
  let total = 0
  for(let i = 0; i < sizes.length; i++) {
    const size = sizes[i]
    if(total + size > target) {
      break;
    }

    total += size
  }
  console.log(total)
}

for(let i = 0; i < input.length; i++) {
  const cmd = input[i]
  execute(cmd, i)
}
updateParent()
sum()



// console.log(map)