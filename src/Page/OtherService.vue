<template lang="">
    <Main>
        
        <section class="bg-white dark:bg-gray-900 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover ">
            <div class=" backdrop-brightness-50">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-6xl">Other service</h1>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-100">
            <div class="container mx-auto">
            
            </div>
        </section>
    </Main>
</template>

<script setup>
import Main from '@/Layout/Main.vue'
import { getComponent } from '@/components/index.js'
import { arrayLegal } from '@/Functions/LegalService.js'
const array = arrayLegal();
const { ButtonWithIcon } = getComponent();
</script>