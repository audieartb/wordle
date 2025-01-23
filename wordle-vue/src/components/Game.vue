<script setup>
<<<<<<< HEAD
import { onMounted, ref, withDefaults } from 'vue'
=======
import { ref, inject} from 'vue'
>>>>>>> origin
import { getWord } from '../services/getWod'
import AttemptLine from './AttempLine.vue'
import LvInput from 'lightvue/input'
import LvButton from 'lightvue/button'
<<<<<<< HEAD
import LvDialog from 'lightvue/dialog'
import MenuBar from './MenuBar.vue'
import { getCurrentInstance } from 'vue'
import { store } from '../store/store'
const instance = getCurrentInstance().appContext.config.globalProperties
=======
import {fiveLettersOnly,gameLost,gameWin, finished} from './utils/toastMessages'
const TOAST = inject('globalProperties')
>>>>>>> origin

//Variables
const word = ref('')
var attempCount = 0
var newWordAttempt = ref('')
var attemptList = []
const VALID_ATTEMPS = 6
<<<<<<< HEAD
var isSolved = false

const OUT_OF_ATTEMPTS = {
  type: 'info',
  title: 'Warn Message',
  content: 'Game Over',
  position: 'top',
  duration: 3000
}

const LETTER_COUNT = {
  type: 'info',
  title: 'Warn Message',
  content: 'Words must have 5 letters',
  position: 'top',
  duration: 3000
}
const SUCCESS_GAME = {
  type: 'info',
  title: 'Warn Message',
  content: 'You won!',
  position: 'top',
  duration: 3000
}

=======
var gameStatus = 'progress'
>>>>>>> origin
//Functions
async function setWord() {
  word.value = getWord()
    .then((response) => {
      word.value = response
      return response
    })
    .catch((error) => console.log(error))
}
<<<<<<< HEAD
function showTop(message) {
  try {

    instance.$toast.add(message)
    lightToast.add('message')
  } catch (error) {
    console.log('error on toast', error)
  } finally {
    return
  }
}
=======
>>>>>>> origin

function checkStatus() {
  attempCount++
<<<<<<< HEAD
  if (isSolved) {
    showTop(SUCCESS_GAME)
    return
  }
  if (attempCount > 6) {
    showTop(OUT_OF_ATTEMPTS)
    return
  } else if (newWordAttempt.value.length != 5) {
    showTop(LETTER_COUNT)
    attempCount--
    return
  }

  newWordAttempt.value = newWordAttempt.value.toLowerCase()
  attemptList.push(newWordAttempt.value)
  
  if (newWordAttempt.value == word.value) {
    isSolved = true
    showTop(SUCCESS_GAME)
  }
  newWordAttempt.value = ''
=======
  if(gameStatus == 'win' || gameStatus == 'lost'){
    emitToast(finished)
    return
  }

  if(newWordAttempt.value.length != 5){
   
    emitToast(fiveLettersOnly)
    attempCount--;
    return
  }

  if(newWordAttempt.value != word.value && attempCount >= 6){
    emitToast(gameLost)
    submitAttempt()
    gameStatus == 'lost'
    return 
  }else if(newWordAttempt.value != word.value){
    submitAttempt()
    return
  }
  else if(true  || attempCount >= 6) {
    emitToast(gameWin)
    gameStatus ='win'
  }

  submitAttempt()
>>>>>>> origin
}

function submitAttempt(){
  attemptList.push(newWordAttempt.value)
    newWordAttempt.value = ''
}

function resetGame(){
  console.log('resetting game')
  gameStatus = 'progress';
  attempCount = 0;
  attemptList = []
}

function emitToast(message){
  TOAST.removeAllGroups()
  TOAST.add(message)
}
setWord()
</script>

<template>
  <div id="menu-bar">
    <MenuBar></MenuBar>
    <LvDialog
      class="dialog-signin"
      v-model="store.showSignIn"
      :modal="true"
      :style="{ overflow: 'visible', width: '50vw', 'min-width': '20em' }"
      :baseZIndex="3"
      :header="'Sign in'"
    >
      <LvInput type="text" label="email"></LvInput>
      <LvInput type="password" label="password"></LvInput>
      <LvButton :label="'Submit'"></LvButton>
    </LvDialog>
  </div>
  <div class="game-container">
    <AttemptLine
      :attempt="attemptList[idx]"
      v-for="(i, idx) in VALID_ATTEMPS"
      :key="i"
      :line-id="idx"
      :id="idx"
      :wod="word"
    />

    <div class="input-container">
      <lv-input
        v-model="newWordAttempt"
        :maxlength="5"
        :rounded="true"
<<<<<<< HEAD
        :help-text="isSolved ? 'you won!' : 'try a new word..'"
        @keyup.enter="submitAttempt"
=======
        :help-text="gameStatus == 'progress' ? 'try a new word...' : 'game over'"
        @keyup.enter="checkStatus"
>>>>>>> origin
      ></lv-input>
    </div>
<<<<<<< HEAD
    <LvButton label="Submit" class="--mr-4" @click="submitAttempt" />
=======
    <!-- <LvButton label="Reset Game" class="--mr-4" @click="resetGame" /> -->
>>>>>>> origin
  </div>
</template>

<style scoped>
.dialog-signin {
  display: flex;
  align-items: center;
  justify-content: center;
}

#menu-bar {
  margin-bottom: 1rem;
}

.game-container {
  margin: auto;
  width: fit-content;
}

.input-container {
}
</style>
