<script setup>
import Navbar from "../components/Navbar.vue"
import Box from "../components/Box.vue"
import { datas } from "../components/data"
</script>

<template>
    <Navbar />
    <main>
        <h2 class="flex justify-center text-xl my-8">Collaborator</h2>  
        <div class="mx-8 sm:mx-12 grid justify-center items-center align-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Box v-for="data in datas" 
                :user="data.user" 
                :name="data.name" 
                :hasArea="data.hasArea" 
                :area="data.area"
                :image="data.image"
        />
        </div>
        <div class="mt-5"></div>
    </main>
</template>