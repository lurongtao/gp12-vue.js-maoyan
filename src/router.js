import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'pages/index/Index'
import City from 'pages/city/City'
import Detail from 'pages/details/Detail'

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
      redirect: '/home',
    },
    {
      path: '/home',
      component: Index,
      redirect: '/home/movies',
      children: [
        {
          path: 'movies',
          component: Movies,
          redirect: '/home/movies/intheater',
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
          path: 'theaters',
          component: Theaters
        },
        {
          path: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router