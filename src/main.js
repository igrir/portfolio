import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './components/HomeView.vue'
import PortfolioView from './components/PortfolioView.vue'
// import BskyView from './components/BskyView.vue'
import App from './App.vue'
import { createApp } from 'vue'

import bskyembed from "bsky-embed/dist/bsky-embed.es"



const routes = [
  { path: '/', component: HomeView },
  // { path: '/bsky', component: BskyView },
  { path: '/portfolio', component: PortfolioView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(bskyembed)
app.use(router)
app.mount('#app')