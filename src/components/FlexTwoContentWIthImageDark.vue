<script setup>

import H2 from '@/components/H2.vue'

const props = defineProps({
    EvenOrOdd:{
        type: Number,
        default:0,
    },
    content:{
        type: Object,
        default:0,
    },
});
</script>

<template lang="">
   <div :class="[EvenOrOdd % 2 == 0 ? 'flex' : 'flex flex-col sm:flex-row-reverse' , 'mx-auto max-w-7xl gap-x-20 gap-y-10'  ]">
        <div class="flex-1">
            <div class="overflow-hidden rounded-3xl bg-gray-900">
                <img class="aspect-video w-full object-cover brightness-125 saturate-0" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
        <div class="flex-1">
            <div class="text-base ">
                <h2 class="text-3xl font-bold tracking-tight capitalize text-gray-200 sm:text-4xl">{{content.title}}</h2>
                <div class="max-w-xl">
                <p class="mx-auto mt-6 text-xl text-gray-300 mb-4">{{ content.description }}</p>
                <a class="mx-auto text-xl text-indigo-100 underline underline-offset-4 " href="#">Detail <i class="fa fa-long-arrow-right underline underline-offset-4 "></i></a>
                </div>
            </div>
        </div>
    </div>
</template>