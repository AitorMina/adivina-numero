// 1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const messageField = document.querySelector('.message')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')

//2do paso:crear las variables que necesitamos

let score = 20
const highscore = 0

const MIN_NUMBER = 1
const MAX_NUMBER = 20
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

//3er paso: añadir un listener al checkButton , agregarle un evento y mostrar
//un mensaje que diga si el número es mayor o menor en el campo
//messageField

checkButton.addEventListener('click', function () {
  const number = guessField.value
  if (number < secretNumber) {
    messageField.textContent = 'El número es menor'
    score--
    scoreField.textContent = score
  } else if (number > secretNumber) {
    messageField.textContent = 'El número es mayor'
    score--
    scoreField.textContent = score
  } else {
    messageField.textContent = '¡Acertaste!'
  }
})
