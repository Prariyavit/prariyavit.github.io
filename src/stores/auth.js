import { ref } from 'vue'
import { defineStore } from 'pinia'
import { googleTokenLogin } from "vue3-google-login"
import { useRoute } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
    const access_token = ref('')
    const route = useRoute()

    const isLogin = () => {
        return (access_token.value) ? true : false
    }
  
    const signIn = async () => {  
        try {
            const googleToken = await googleTokenLogin()
            access_token.value = googleToken.access_token
            localStorage.setItem('access_token', googleToken.access_token)
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    const signOut = () => {
        console.log('logout')
        access_token.value = ''
        localStorage.removeItem('access_token');
        window.location.reload()
    }

    return { access_token, signIn, signOut, isLogin }
})
