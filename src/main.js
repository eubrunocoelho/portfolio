import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';
import './assets/scss/global.scss';

const IoniconsModuleScript = document.createElement('script');
const IoniconsNomoduleScript = document.createElement('script');

IoniconsModuleScript.setAttribute('type', 'module');
IoniconsModuleScript.setAttribute('src', 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js');

IoniconsNomoduleScript.setAttribute('nomodule', '');
IoniconsNomoduleScript.setAttribute('src', 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js');

document.head.appendChild(IoniconsModuleScript);
document.head.appendChild(IoniconsNomoduleScript);

library.add(fas, fab, far);
dom.watch();

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
