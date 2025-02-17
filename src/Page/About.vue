<template lang="">
    <Main>
        
        <section class="bg-white dark:bg-gray-900 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover ">
            <div class=" backdrop-brightness-50">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-6xl">Tentang kami</h1>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-100">
            <div class="container mx-auto">
                <div class="space-y-9">
                    <div class="max-w-5xl mx-auto">
                        <p class="text-xl text-gray-600"><em>Legal Tree</em> telah berdiri sejak 2017 dan telah dipercaya oleh beberapa Perusahaan Nasional dan Perusahaan Multinasional serta Perusahaan Rintisan (Start-ups), dan lainnya. berfokus dalam memberikan penerapan hukum dalam mencapai tujuan bisnis dan kegiatan bisnis. Legal Tree memiliki Tim Profesional yang mempunyai sertifikat profesi yaitu Pengacara yang berkemampuan dan berkapasitas untuk memberikan nasihat hukum untuk semua ukuran bisnis. Untuk itu kami hadir disini sebagai </p>
                        <p class="text-xl text-gray-600"> </p>
                    </div>
                    <div class="max-w-5xl mx-auto">
                        <p class="text-xl text-gray-600"><em>Legal Tree</em> telah berdiri sejak 2017 dan telah dipercaya oleh beberapa Perusahaan Nasional dan Perusahaan Multinasional serta Perusahaan Rintisan (Start-ups), dan lainnya. berfokus dalam memberikan penerapan hukum dalam mencapai tujuan bisnis dan kegiatan bisnis. Legal Tree memiliki Tim Profesional yang mempunyai sertifikat profesi yaitu Pengacara yang berkemampuan dan berkapasitas untuk memberikan nasihat hukum untuk semua ukuran bisnis. Untuk itu kami hadir disini sebagai </p>
                        <p class="text-xl text-gray-600"> </p>
                    </div>
                    <div class="max-w-5xl mx-auto">
                        <p class="text-xl text-gray-600"><em>Legal Tree</em> telah berdiri sejak 2017 dan telah dipercaya oleh beberapa Perusahaan Nasional dan Perusahaan Multinasional serta Perusahaan Rintisan (Start-ups), dan lainnya. berfokus dalam memberikan penerapan hukum dalam mencapai tujuan bisnis dan kegiatan bisnis. Legal Tree memiliki Tim Profesional yang mempunyai sertifikat profesi yaitu Pengacara yang berkemampuan dan berkapasitas untuk memberikan nasihat hukum untuk semua ukuran bisnis. Untuk itu kami hadir disini sebagai </p>
                        <p class="text-xl text-gray-600"> </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-900">
            <div class="container mx-auto">
                <h2 class="text-gray-200 text-5xl font-medium text-center">Kenapa memilih kami</h2>
                
            </div>
            <div class="mt-20">
                <div class="space-y-20 px-20">
                    <div v-for="( content, index ) in CardFlex">
                        <FlexTwoContentWIthImageDark :content="content" :EvenOrOdd="index"  />
                    </div>
                </div>
            </div>
        </section>
    </Main>
</template>

<script setup>
import Main from '@/Layout/Main.vue'
import { FlexTwoContentWithImageAbout } from '@/Functions/About.js'
import FlexTwoContentWIthImageDark from '@/components/FlexTwoContentWIthImageDark.vue'
const CardFlex = FlexTwoContentWithImageAbout();
</script>