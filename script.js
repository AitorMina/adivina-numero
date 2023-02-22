// 1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const messageField = document.querySelector('.message')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')

//2do paso:crear las variables que necesitamos

const score = 20
const highscore = 0

const MIN_NUMBER = 1
const MAX_NUMBER = 20
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
const number = guessField.value

//3er paso: crear las funciones que necesitamos

scoreField.textContent = 10

checkButton.addEventListener('click', function () {
  alert('Hola mundo')
})
