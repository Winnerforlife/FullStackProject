import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import CreateArticle from './components/CreateArticle.vue'
import ArticleDetails from './components/ArticleDetails.vue'
import ArticleEdit from './components/ArticleEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: CreateArticle
  },
  {
    path: '/details/:slug',
    name: 'details',
    component: ArticleDetails,
    props: true
  },
  {
    path: '/edit/:slug',
    name: 'articleedit',
    component: ArticleEdit,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router