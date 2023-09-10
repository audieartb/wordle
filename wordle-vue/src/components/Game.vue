<script setup>
import { ref, inject} from 'vue'
import { getWord } from '../services/getWod'
import AttemptLine from './AttempLine.vue'
import LvInput from 'lightvue/input'
import LvButton from 'lightvue/button'
import {fiveLettersOnly,gameLost,gameWin, finished} from './utils/toastMessages'
const TOAST = inject('globalProperties')

//Variables
const word = ref('')
var attempCount = 0
var newWordAttempt = ref('')
var attemptList = []
const VALID_ATTEMPS = 6
var gameStatus = 'progress'
//Functions
async function setWord() {
  word.value = getWord()
    .then((response) => {
      console.log(response, '--> at GAME COMPONENT')
      word.value = response
      return response
    })
    .catch((error) => console.log(error))
}

function checkStatus() {
  attempCount++
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
  <div>
    <h3>{{ word }}</h3>
    <div class="game-container">
      <AttemptLine
        :attempt="attemptList[idx]"
        v-for="(i, idx) in VALID_ATTEMPS"
        :key="i"
        :line-id="idx"
        :id="idx"
        :wod="word"
      />
    </div>

    <div class="input-container">
      <lv-input
        v-model="newWordAttempt"
        :maxlength="5"
        :rounded="true"
        :help-text="gameStatus == 'progress' ? 'try a new word...' : 'game over'"
        @keyup.enter="checkStatus"
      ></lv-input>
      <p>{{ newWordAttempt }}</p>
    </div>
    <!-- <LvButton label="Reset Game" class="--mr-4" @click="resetGame" /> -->
  </div>
</template>

<style scoped></style>
