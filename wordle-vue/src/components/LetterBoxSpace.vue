<script setup>
import LvButton from 'lightvue/button'
const props = defineProps({
  letter:{
    type:String,
    required: true
  },
  boxStyle:{
    type:String,
    required: true
  }
})

</script>

<template>  



<LvButton
:label="letter"
:class="[ boxStyle]"

/>

</template>