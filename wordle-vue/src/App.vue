<script setup>
import GameBoard from './components/Game.vue'
import {provideGlobalProperties} from './GlobalProperties'
provideGlobalProperties()
//import LvToast from 'lightvue/Toast';
import MenuBar from './components/MenuBar.vue'
</script>

<template>
  <LvToast position: top/>


  <main id="gameboard">
    
    <GameBoard />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
}

#menu-bar {
  width: 100%;
}
</style>
