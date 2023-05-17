import { createRouter, createWebHistory } from 'vue-router'
import EpisodesView from '../views/EpisodesView.vue'
import LocationView from '../views/LocationView.vue'
import FicheEpisode from "@/components/FicheEpisode.vue";
import FicheLocation from "@/components/FicheLocation.vue";
import FichePerso from "@/components/FichePerso.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'episodes',
      component: EpisodesView
    },
    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    ,
    {
      path: '/fichePerso/:id',
      name: 'fichePerso',
      component: FichePerso
    },
    {
      path: '/ficheEpisode/:id',
      name: 'ficheEpisode',
      component: FicheEpisode
    },
    {
      path: '/ficheLocation/:id',
      name: 'ficheLocation',
      component: FicheLocation
    }
  ]
})

export default router
