<script setup>
import { RouterLink, RouterView } from 'vue-router'
  const solutions = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Legal service', href: '/legal-service' },
    { name: 'Layanan badan usaha', href: '/layanan-badan-usaha' },
    { name: 'Other service', href: '/other-service' },
  ];

</script>

<template lang="">
<nav class="bg-gray-800">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <RouterLink to="/" class="flex items-center">
        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-300">Rismando legal</span>
    </RouterLink>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex justify-end flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li v-for="(items, index) in solutions">
          <RouterLink :to="items.href" class="block py-2 pl-3 pr-4 text-gray-300 rounded md:bg-transparent md:p-0" aria-current="page">{{ items.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>