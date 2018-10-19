// Code your solution in this file!
const feetInBlock = 264
const hq = 42

// someValue = 43rd street
// hq = 42nd street
function distanceFromHqInBlocks(currentBlock) {
  if (currentBlock > hq) {
    return currentBlock - hq 
  }
  else {
    return hq - currentBlock
  }
}

function distanceFromHqInFeet(currentBlock) {
  let numberOfBlocs
  if (currentBlock > hq) {
    numberOfBlocks = currentBlock - hq 
  }
  else {
    numberOfBlocks = hq - currentBlock
  }
  return numberOfBlocks * feetInBlock
}

function distanceTravelledInFeet(block1, block2) {
  const numberOfBlocks = Math.abs(block1 - block2)
  return numberOfBlocks * feetInBlock
}


