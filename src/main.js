import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag, faUserSecret, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import 'normalize.css';
import './assets/css/styles.css';
import router from './router'

library.add(faShoppingBag);
library.add( faUserSecret );
library.add(faPlus);
createApp(App).use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
