import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Movies from './pages/movies/Movies'
import Theaters from './pages/theaters/Theaters'
import Profile from './pages/profile/Profile'

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      component: Movies
    },
    {
      path: '/theaters',
      component: Theaters
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

export default router