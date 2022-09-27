import { createRouter, createWebHashHistory } from 'vue-router'
import AddList from '../components/AddList'
import List from '../components/List'
import BookList from '../components/BookList'


const routes = [
  {
    path: '/',
    alias: '/list',
    name: 'list',
    component: () => import("../components/BookList")
  },
  {
    path: '/add',
    name: 'add',
    component: () => import("../components/AddList")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
