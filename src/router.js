import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Movies from 'pages/movies/Movies'
import Theaters from 'pages/theaters/Theaters'
import Profile from 'pages/profile/Profile'

import Intheater from 'pages/movies/Intheater'
import Comingsoon from 'pages/movies/Comingsoon'

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      component: Movies,
      redirect: '/movies/intheater',
      children: [
        {
          path: 'intheater',
          name: 'intheater',
          component: Intheater
        },
        {
          path: 'comingsoon',
          name: 'comingsoon',
          component: Comingsoon
        }
      ]
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