<script setup>
import { onMounted, ref, withDefaults} from 'vue'
import { getWord } from '../services/getWod'
import AttemptLine from './AttempLine.vue'
import LvInput from 'lightvue/input'
import LvButton from 'lightvue/button'
//import { getCurrentInstance } from 'vue'
//const instance = getCurrentInstance().appContext.config.globalProperties;

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
function showTop(){
  try {
    //console.log(app.LvToast)
    
    //instance.$toast.add({ title: 'Default Message', content: 'Message Content', duration: 3000 });
    //lightToast.add('message')
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
  </div>
</template>

<style scoped></style>
