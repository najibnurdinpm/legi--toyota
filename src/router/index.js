import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/Page/Dashboard.vue'
import About from '@/Page/About.vue'
import LegalService from '@/Page/LegalService.vue'
import LayananBadanUsaha from '@/Page/LayananBadanUsaha.vue'
import OtherService from '@/Page/OtherService.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/legal-service',
      name: 'Legal service',
      component: LegalService,
    },
    {
      path: '/layanan-badan-usaha',
      name: 'Layana badan usaha',
      component: LayananBadanUsaha,
    },
    {
      path: '/other-service',
      name: 'Other service',
      component: OtherService,
    },
  ]
})

export default router
