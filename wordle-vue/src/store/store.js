import {reactive} from 'vue'

export const store = reactive({
    showSignIn : false,
    switchDialogState(){
        this.showSignIn = !this.showSignIn
    },

})