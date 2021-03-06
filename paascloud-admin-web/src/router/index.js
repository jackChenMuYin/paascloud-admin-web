import { Error } from '../views';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './home';
import Uac from './uac';
import Mdc from './mdc';
import Omc from './omc';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    Home,
    Uac,
    Mdc,
    Omc,
    {
      path: '*',
      component: Error.NotFoundPage
    }
  ]
});
