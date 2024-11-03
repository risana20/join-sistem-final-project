import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import CategoryView from '../views/CategoryView.vue'
import AuthorView from '../views/AuthorView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component:  BlogView,
    },
    {
      path: '/contact',
      name: 'contact',
      component:  ContactView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component:  PrivacyPolicyView,
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component:  BlogPostView,
    },
    {
      path: '/category',
      name: 'category',
      component:  CategoryView,
    },
    {
      path: '/author',
      name: 'author',
      component:  AuthorView,
    },
  ],
})

export default router
