<template lang="">
    <Main>
        
        <section class="bg-white dark:bg-gray-900 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover ">
            <div class=" backdrop-brightness-50">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-6xl">Legal service</h1>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-100">
            <div class="container mx-auto">
                <div class="flex flex-col space-y-20 ">
                    <div class="" v-for="(items, index) in arrayLegals">
                        <div v-for="(item, idx) in items">
                            <div class="flex flex-col space-y-20">
                                <div class="max-w-2xl mx-auto">
                                    <h2 class="text-3xl font-bold text-gray-600 ">{{item.title}}</h2>
                                </div>
                                <div>
                                    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        <li v-for="(val, index) in item.data" class="col-span-1 divide-y divide-gray-200 rounded-lg">
                                            <div class="flex w-full items-center justify-between space-x-6 p-6">
                                                <div class="flex flex-col space-y-9">
                                                    <h3 class="text-gray-600 text-2xl text-center font-bold">{{ val.title }}</h3>
                                                    <ul class="flex flex-col">
                                                        <li v-for="(items, idx) in val.body">
                                                            <p class="mx-auto text-xl text-gray-600">{{ items.content }}</p>
                                                        </li>
                                                    </ul>
                                                    <div class="px-0 mx-auto">
                                                        <ButtonWithIcon>
                                                            <p><i class="fa fa-whatsapp"></i> {{ val.link.title }}</p>
                                                        </ButtonWithIcon>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Main>
</template>

<script setup>
import Main from '@/Layout/Main.vue'
import { getComponent } from '@/components/index.js'
import { arrayLegal, arrayLegal1 } from '@/Functions/LegalService.js'
const array = arrayLegal();
const arrayLegals = arrayLegal1();
const { ButtonWithIcon } = getComponent();
</script>