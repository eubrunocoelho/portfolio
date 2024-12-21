import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';

import '@fortawesome/fontawesome-free/css/all.css';
import './assets/scss/global.scss';

library.add(fas, fab, far);
dom.watch();

const app = createApp(App);
app.config.ignoredElements = [/^ion-/];
app.component('font-awesome-icon', FontAwesomeIcon);

// IonIcons Inject
const scriptIonIcons = document.createElement('script');
scriptIonIcons.type = 'module';
scriptIonIcons.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(scriptIonIcons);

app.mount('#app');
