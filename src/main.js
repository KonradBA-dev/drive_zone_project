import { createApp } from 'vue';
import App from './App.vue';
import store from './store';  // Import Vuex store
import router from './router';
import vuetify from './plugins/vuetify';

createApp(App)
  .use(store)  // Użycie Vuex w aplikacji
  .use(router)
  .use(vuetify)
  .mount('#app');
