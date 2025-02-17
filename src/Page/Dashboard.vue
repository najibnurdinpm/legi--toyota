<template>
    <Main>
        <div class="relative isolate overflow-hidden pt-14">
      <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover backdrop-brightness-50" />
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 " aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center px-6">
          <h1 class="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl drop-shadow-2xl shadow-gray-900">JASA PEMBUATAN PT, CV dan pelayanan lainnya</h1>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>

    <section aria-labelledby="sale-heading" class="relative mx-auto flex flex-col items-center px-4 py-16 sm:py-20 px-6 sm:px-8 bg-gray-100">
      <div class="mx-auto max-w-2xl lg:max-w-none text-center sm:px-20">
        <h2 id="sale-heading" class="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl  ">WE ARE READY TO ASSIST YOU IN ESTABLISHING YOUR BUSINESS</h2>

        <p class="mt-6 sm:mt-10 text-justify  sm:text-xl text-gray-900 max-w-7xl sm:text-left mb-10"><span class="text-red-500 ml-10">PT RISMANDO LEGAL </span>yang dikenal dengan Legal Tree adalah suatu badan hukum yang memiliki kemampuan dan tim yang berpengalaman dalam bidang jasa legal services, pengacara, dan jasa lainnya yang memiliki tujuan untuk membantu perusahaan, pelaku usaha dan start-up di Indonesia. Kami membantu anda untuk mendirikan perusahaan dari sisi legalitas atau ijin usaha,dan membantu perusahaan yang sudah berjalan dalam memenuhi kebutuhan bisnisnya dari segi hukum. Kami juga menyediakan berbagai jasa seperti Legal Advisory , foreign Investment legal assistant, legal Audit, Legal due diligence dan retainer lawyer dengan berbagai kebutuhan legal bisnis untuk menjaga dan membentengi perusahaan anda dari permasalahan hukum yang mungkin timbul di kemudian hari. Dengan ini kami yang memiliki tim advokat, rekan Notaris, rekanan Akuntan publik, rekanan Konsultan Pajak, Konsultan Bisnis dan tim lainnya yang siap membantu kebutuhan bisnis anda lebih terjadwal dan Profesional.</p>
      </div>
        <div class="space-y-10 sm:space-y-20 sm:px-20">
            <div v-for="( content, index ) in CardFlex">
                <FlexTwoContentWIthImage :content="content" :EvenOrOdd="index"  />
            </div>
        </div>
    </section>
    
        <section class="bg-gray-900 px-0 px-6 py-16 sm:py-20 lg:px-8 ">
            <div class="text-base leading-7 sm:px-20">
                    <div class=" mx-auto">
                    <h2 class="text-center text-2xl font-bold tracking-tight text-gray-200 sm:text-5xl">BIAYA JASA LEGAL SERVICES</h2>
                    <p class="mx-auto mt-6 sm:mt-16 sm:text-xl text-gray-300 max-w-3xl">Biaya Pelayanan kami didasarkan pada jam kerja yang digunakan untuk mengerjakan kebutuhan Anda, sehingga kami menjamin biaya yang yang paling efisien dan tepat sesuai dengan kebutuhan Anda. Kami menyediakan 2 (dua) macam biaya pelayanan yang bisa disesuaikan dengan anggaran perusahaan Anda, yaitu:</p>
                        <div class="flex sm:flex-row flex-col justify-between gap-x-5 gap-y-10 mt-10 sm:mt-20">
                            <div class="flex-1">
                              <div class="flex gap-x-4 sm:gap-x-8">
                                  <div class="text-gray-300">
                                    <div class="text-gray-200 text-2xl sm:text-5xl">
                                       <i class="fa fa-book"></i>
                                    </div>
                                  </div>
                                  <div class="text-gray-300 flex-1">
                                    <div class="flex flex-col space-y-2 sm:space-y-3">
                                      <h2 class=" text-xl font-medium tracking-tight text-gray-300 sm:text-xl">RETAINER FEE (MONTHLY OR YEARLY BASIS)</h2>
                                      <p class="mx-auto text-sm sm:text-lg text-gray-300">Biaya Pelayanan kami didasarkan pada jam kerja yang digunakan untuk mengerjakan kebutuhan Anda, sehingga kami menjamin biaya yang yang paling efisien dan tepat sesuai dengan kebutuhan Anda. Kami menyediakan 2 (dua) macam biaya pelayanan yang bisa disesuaikan dengan anggaran perusahaan Anda, yaitu:</p>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div class="flex-1">
                              <div class="flex gap-x-4 sm:gap-x-8">
                                  <div class="text-gray-300">
                                    <div class="text-gray-200 text-2xl sm:text-5xl">
                                       <i class="fa fa-book"></i>
                                    </div>
                                  </div>
                                  <div class="text-gray-300 flex-1">
                                    <div class="flex flex-col space-y-2 sm:space-y-3">
                                      <h2 class=" text-xl font-medium tracking-tight text-gray-300 sm:text-xl">RETAINER FEE (MONTHLY OR YEARLY BASIS)</h2>
                                      <p class="mx-auto text-sm sm:text-lg text-gray-300">Biaya Pelayanan kami didasarkan pada jam kerja yang digunakan untuk mengerjakan kebutuhan Anda, sehingga kami menjamin biaya yang yang paling efisien dan tepat sesuai dengan kebutuhan Anda. Kami menyediakan 2 (dua) macam biaya pelayanan yang bisa disesuaikan dengan anggaran perusahaan Anda, yaitu:</p>
                                    </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    
        <section class="bg-gray-100">
            <div class="flex sm:flex-row flex-col">
            
                <div class="flex-1 text-gray-200">
                    <div class="py-16 sm:py-32 px-6 sm:px-20 mx-auto">
                        <div class="flex flex-col">
                        <h2 class="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl uppercase">Lebih dari 100</h2>
                        <p class=" text-base text-center font-semibold leading-7 text-gray-700">terus bertambah dan Semakin dipercaya</p>
                         <p class="mx-auto mt-5 sm:mt-10 text-sm sm:text-lg text-gray-900">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est.</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1 text-gray-200 relative">
                    <div class="absolute inset-0 h-full w-full bg-green-300">
                        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
            </div>
            
        </section>
        <div class="bg-gray-900 px-6 py-16 sm:py-32 lg:px-8">
    <div class="mx-auto text-center">
      <h2 class="text-2xl font-bold tracking-tight text-gray-200 sm:text-5xl">JANGAN RAGU UNTUK KONSULTASI</h2>
      <p class="mt-6 sm:text-lg leading-8 text-gray-300">TIM KAMI SIAP MEMBANTU ANDA</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
            <button type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Hubungi kami</button>
          </div>
    </div>
  </div>
        
    </Main>
</template>

<script setup>
import Main from '@/Layout/Main.vue'
import { FlexTwoContentWithImage } from '@/Functions/Dashboard.js'
import FlexTwoContentWIthImage from '@/components/FlexTwoContentWIthImage.vue'
import TextDescription from '@/components/TextDescription.vue'
import H2 from '@/components/H2.vue'

const CardFlex = FlexTwoContentWithImage();
const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]
</script>