<script setup>
import LvDialog from 'lightvue/dialog'
import LvButton from 'lightvue/button'
import LvInput from 'lightvue/input'
import {store} from '../store/store.js'

import { ref } from 'vue'

const displayModal = ref(false)
function openModal() {
  //displayModal.value = true
  store.switchDialogState()
}
</script>

<template>
  <div class="content-section implementation">
    <div class="card">
      <LvButton
        label="Sign In"
        @click="openModal"
        icon="light-icon-external-link"
        class="lv-button"
      ></LvButton>
    </div>
  </div>
</template>

<style scoped>
.lv-button {
  margin: 0 0.5rem 0 0;
  min-width: 10rem;
}


</style>
