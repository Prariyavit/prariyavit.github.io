<template>
    <div class="flex items-center justify-center align-center">
        <div class="box">
            <div class="img">
                <a href="https://github.com/Prariyavit"><img class="rounded-[50%]" :src="image" /></a>
            </div>
            <div class="flex">
                <a href="https://github.com/Prariyavit">
                    <p class="text-base cursor-pointer hover:text-blue-700 font-medium">
                        {{ user }}
                    </p>
                </a>
                <a href="https://github.com/Prariyavit">
                    <p class="mt-[0.5px] text-gray-400 px-2 cursor-pointer hover:text-blue-600">
                        {{ name }}
                    </p>
                </a>
            </div>
            <div v-if="hasArea" class="flex">
                <svg v-if="hasArea" class="mt-[0.5px]" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                <p class="px-2 text-slate-200">{{ area }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    user: String,
    name: String,
    area: String,
    hasArea: Boolean,
    image: String
})
</script>
