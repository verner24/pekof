import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Favorites from '@/pages/Favorites';

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: Product },
  { path: '/favorites', component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;