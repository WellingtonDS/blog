import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LoadingPaginate from '@/components/loadPage/LoadPage.vue';
import VueMask from 'v-mask';

Vue.config.productionTip = false
Vue.component('LoadingPaginate', LoadingPaginate);
Vue.use(VueMask);

Vue.filter("NumberPrice", value =>{
  value = Number(value);

  if(!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  } else {
    return "";
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
