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
  if (currentBlock > hq) {
    return currentBlock - hq 
  }
  else {
    return hq - currentBlock
  }
  return currentBlock * 264
}