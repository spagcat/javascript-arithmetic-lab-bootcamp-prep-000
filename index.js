
var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

function add() {
  return a + b
}

function subtract() {
  return a - b
}

function multiply() {
  return a * b
}

function divide() {
  return a / b
}

function inc() {
  return a++
}

function dec() {
  return a--
}

function makeInt() {
  return parseInt(a)
}

function preserveDecimal() {
  return parseFloat(a)
}