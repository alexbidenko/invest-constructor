import {createRouter, createWebHistory} from 'vue-router';

import AuthorizedLayout from './layouts/AuthorizedLayout.vue';
import AuthPage from './pages/Auth/AuthPage.vue';
import MainPage from './pages/Main/MainPage.vue';
import RegistrationPage from './pages/Registration/RegistrationPage.vue';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage,
  },
  {
    path: '/sign-up',
    name: 'Sign-up',
    component: RegistrationPage,
  },
  {
    path: '/',
    name: 'Authorized',
    component: AuthorizedLayout,
    children: [
      {
        path: '/',
        name: 'MainPage',
        component: MainPage,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
