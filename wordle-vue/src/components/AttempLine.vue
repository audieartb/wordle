<script setup>
import { ref } from 'vue'
import LvInput from 'lightvue/input'
import LetterBoxSpace from './LetterBoxSpace.vue'
import { watch, computed, reactive } from 'vue'

const WORD_LENGHT = 5
const attemptLetterStyle = 'attempt-letter'
const props = defineProps({
  wod: {
    type: String,
    required: true
  },
  attempt: {
    type: String
  },
  lineId: {
    type: Number,
    required: true
  }
})

function style2(letter, idx){
  if(!props.wod){
    return
  }
  if(props.wod[idx] == letter){
    return 'lv--default'
  }else if(props.wod.includes(letter)){
    return 'lv--warning'
  }else{
    return 'letter-neutral'
  }
}

</script>

<template>
  <div class="attempt-row" :id="lineId">
    
    <div v-if="attempt" v-for="(letter, idx ) in attempt">
    <LetterBoxSpace :box-style="style2(letter, idx)" :letter="letter" class="attempt-letter"/>
    </div>

    <div v-else  v-for="i in WORD_LENGHT">
    <LetterBoxSpace box-style="default" letter="" class="attempt-letter letter-neutral"/>
    </div>
  </div>
</template>

<style scoped>
.attempt-row {
  display: flex;
  margin-bottom: 1.15rem;
}

.attempt-letter {
  margin-right: 1rem;
  height: 4rem;
  width: 4rem;
}

.letter-neutral{
  background-color: #6D6D6D;
}
</style>
