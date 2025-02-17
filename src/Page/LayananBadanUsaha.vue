<template lang="">
    <Main>
        
        <section class="bg-white dark:bg-gray-900 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover ">
            <div class=" backdrop-brightness-50">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-6xl">Layana badan usaha</h1>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-100">
            <div class="container mx-auto">
                 <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    <li v-for="(val, index) in array" class="col-span-1 rounded-lg bg-white py-4">
                        <div class="flex w-full items-center justify-between space-x-6 p-6">
                            <div class="flex flex-col sm:px-20">
                                <div class="space-y-4">
                                    <h3 class="text-gray-500 text-2xl text-center font-bold">{{ val.title }}</h3>
                                    <div class="flex justify-center space-x-2 text-indigo-900 border-b pb-2 border-indigo-100 ">
                                        <p>{{ val.currency }}</p>
                                        <h2 class="text-sm sm:text-4xl text-center font-bold">Mulai dari {{ val.price }}</h2>
                                    </div>
                                    <p class="text-gray-900 text-sm sm:text-lg text-center">{{ val.longDays }}</p>
                                </div>
                                <ul class="flex flex-col space-y-4 mt-2 sm:mt-16">
                                    <li class="py-2 border-b border-gray-100 sm:px-2 text-center" v-for="(items, idx) in val.body">
                                        <p class="mx-auto text-sm sm:text-xl text-gray-900">{{ items.content }}</p>
                                    </li>
                                </ul>
                                <div class="px-0 mx-auto mt-4">
                                    <ButtonWithIcon>
                                        <p><i class="fa fa-whatsapp"></i> {{ val.link.title }}</p>
                                    </ButtonWithIcon>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> 
            </div>
        </section>
    </Main>
</template>

<script setup>
import Main from '@/Layout/Main.vue'
import { getComponent } from '@/components/index.js'
import { arrayLBU } from '@/Functions/LayananBadanUsaha.js'
const array = arrayLBU();
const { ButtonWithIcon } = getComponent();
</script>