import About from '@/Pages/About.vue'
import Contact from '@/Pages/Contact.vue'
import Home from '@/Pages/Home.vue'
import Work from '@/Pages/Work.vue'

import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
   { path: '/about', component: About },
   { path: '/work', component: Work },
   { path: '/contact', component: Contact },



]

export const router = createRouter({

  history: createWebHistory(),
  routes,
})