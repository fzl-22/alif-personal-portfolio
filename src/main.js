import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import SvgIcon from '@jamescoyle/vue-icon';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('SvgIcon', SvgIcon)
  .mount('#app');
