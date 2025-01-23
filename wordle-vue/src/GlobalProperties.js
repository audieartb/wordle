import {provide, inject} from 'vue'

const provideGlobalProperties = () =>{
    const app = inject('app')
    console.log(app)
    if(!app){
        throw Error('provideGlobalProperties must be used within a Vue app context.')
    }
    provide('globalProperties', app.config.globalProperties.$toast);
    console.log('provided')
};

export {provideGlobalProperties};