import 'primevue/resources/themes/arya-orange/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import {createPinia} from 'pinia';
import Button from 'primevue/button';
import Card from 'primevue/card';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import {createApp} from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router).use(createPinia()).use(PrimeVue, {ripple: true}).mount('#app');


app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputPassword', Password);
app.component('Card', Card);
