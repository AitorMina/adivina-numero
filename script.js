// 1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const messageField = document.querySelector('.message')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const bodyField = document.querySelector('body')

//2do paso:crear las variables que necesitamos

let score
let highscore = 0
let nuevoHighscore
const MIN_NUMBER = 1
const MAX_NUMBER = 20
let secretNumber

fnInitApp()

//3er paso: añadir un listener al checkButton , agregarle un evento y mostrar
//un mensaje que diga si el número es mayor o menor en el campo
//messageField

checkButton.addEventListener('click', fnCheckButton)

function mostrarMensaje(mensaje) {
  messageField.textContent = mensaje
}

function fnCheckButton() {
  // aunque guessField sea un input number, su valor es string
  // lo pasamos a number
  const number = Number(guessField.value)
  if (number === secretNumber) {
    mostrarMensaje('¡Acertaste!')

    if (score > highscore) {
      highscore = highscoreField.textContent = score
      localStorage.setItem('highscore', nuevoHighscore)
    }
    // cambiar color del fondo, mostrar numero secreto
    numberField.textContent = secretNumber
    bodyField.style.backgroundColor = 'aqua'
  } else if (score === 1) {
    mostrarMensaje('Perdiste')
    scoreField.textContent = 0
    bodyField.style.backgroundColor = 'red'
  } else {
    const mensaje =
      number > secretNumber ? 'El número es mayor' : 'El número es menor'
    mostrarMensaje(mensaje)
    score--
    scoreField.textContent = score
  }
}

againButton.addEventListener('click', fnInitApp)

function fnInitApp() {
  highscore = localStorage.getItem('highscore')

  scoreField.textContent = score = 20
  bodyField.style.backgroundColor = 'black'
  guessField.value = ''
  mostrarMensaje('Start guessing...')
  numberField.textContent = '?'
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
}
