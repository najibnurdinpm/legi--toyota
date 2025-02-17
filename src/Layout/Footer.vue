<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Company name" />
          <p class="text-sm leading-6 text-gray-600">Making the world a better place through constructing elegant hierarchies.</p>
          <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="sm:mt-16 grid sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div>
             
            </div>
            <div class="sm:mt-10 md:mt-0">
              
            </div>
          </div> 
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Layanan</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul> 
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'Pengurusan PT', href: '#' },
    { name: 'Pengurusan CV', href: '#' },
    { name: 'Izin lainnya', href: '#' },
  ],
  legal: [
    { name: 'Legal service', href: '#' },
    { name: 'Layana badan usaha', href: '#' },
    { name: 'Other legal', href: '#' },
  ],
}
</script>