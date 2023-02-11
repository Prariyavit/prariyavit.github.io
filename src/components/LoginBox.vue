<template>
    <div class="box flex flex-col justify-center">
        <h1 class="mb-10">Sign In</h1>
        <div class="flex bg-slate-200 rounded-xl">
            <img class="w-8 rounded-xl" src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" />
            <button @click="useStore.signIn()" class="bg-slate-100 text-black px-2 rounded-xl py-1">Sign In with Google</button>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter()

const useStore = useAuthStore()

onMounted(() => {
    if (localStorage.getItem('access_token')) {
        route.push('/')
    }
})


</script>