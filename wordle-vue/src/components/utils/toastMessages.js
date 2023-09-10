const duration = 1000
const fiveLettersOnly = {
  type: 'warn',
  title: 'Warn Message',
  content: 'The words must contain 5 letters',
  position: 'top',
  duration: duration
}

const gameWin = {
  type: 'sucess',
  title: 'Warn Message',
  content: 'Nice',
  position: 'top',
  duration: duration
}

const gameLost = {
  type: 'error',
  title: 'Warn Message',
  content: 'Ha! Looser',
  position: 'top',
  duration: duration
}

const finished = {
  type: 'error',
  title: 'Warn Message',
  content: 'Game is over',
  position: 'top',
  duration: duration
}

export {fiveLettersOnly,gameLost,gameWin, finished}