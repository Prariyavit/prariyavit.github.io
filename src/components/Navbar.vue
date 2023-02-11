<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { onMounted, ref} from 'vue';
const useStore = useAuthStore()

const islogin = ref()

onMounted(() => {
    islogin.value = (localStorage.getItem('access_token')) ? true : false
})
</script> 

<template>
    <header class="flex bg-gray-800 h-16 items-center">
        <h1 class="pl-16 font-bold text-2xl text-white mx-auto">Try git with team</h1>
        <ul class="pr-14 flex">
            <li v-if="islogin" class="px-2"><RouterLink to='/chat'>Chat</RouterLink></li>
            <li v-if="!islogin" class="px-2"><RouterLink to='/login'>Login</RouterLink></li>
            <button v-if="islogin" @click="useStore.signOut()">Logout</button>
        </ul>
    </header>   
</template>