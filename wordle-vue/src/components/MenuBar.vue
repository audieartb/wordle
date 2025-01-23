<script setup>
import LvGlassCard from 'lightvue/glass-card'
import LvButton from 'lightvue/button';
import {signUp} from '../services/manageUser'
import Popup from './Popup.vue';

var loggedIn = false



async function signUpfunction(){
    const userSignup = signUp().then(()=>{
        console.log("local storage", localStorage.getItem('token'))
    }).catch((error)=>{
        console.log(error)
    })
    return 
}

</script>

<template>
    <LvGlassCard
      backgroundBlur="10px"
      backgroundOpacity="80"
      padding="20px"
      borderRadius="8px"
      backgroundColor="#374D57"
    >
    <div id="menu-bar">
        <div>
            <h1>Not Wordle</h1>
        </div>
        <div v-if="loggedIn">
            <LvButton>Sign out</LvButton>
        </div>
        <div v-else>
            <Popup></Popup>
        </div>
    </div>
  </LvGlassCard>
</template>

<style scoped>


</style>