<script setup>
import { onBeforeMount, ref } from 'vue'
import { getWord } from '../services/getWod'
import AttemptLine from './AttempLine.vue'
import LvInput from 'lightvue/input'
import LvToast from 'lightvue/toast'
import LvButton from 'lightvue/button'


//Variables
const word = ref('')
var attempCount = 0
var newWordAttempt = ref('')
var attemptList = []
const VALID_ATTEMPS = 6

const OUT_OF_ATTEMPTS = {
    type: 'info',
    title: 'Warn Message',
    content: "What do you think you're doing?",
    position: 'top',
    duration: 3000
  }

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
function showTop() {
  try {
    
  } catch (error) {
    console.log("error on toast",error)
  }finally{
    return
  }
} 

function submitAttempt() {
  attempCount++
  if (attempCount > 6) {
    showTop()
    return
  }else if(newWordAttempt.value.length != 5){
    showTop()
    attempCount--;
    console.log()
    return
  }
  console.log('attempted word ==> ', newWordAttempt.value)
  attemptList.push(newWordAttempt.value)
  newWordAttempt.value = ''
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
        help-text="try a new word..."
        @keyup.enter="submitAttempt"
      ></lv-input>
      <p>{{ newWordAttempt }}</p>
    </div>
    <LvButton label="Top" class="--mr-4" @click="showTop" />
    <LvToast v-bind="OUT_OF_ATTEMPTS"/>
  </div>
</template>

<style scoped></style>
