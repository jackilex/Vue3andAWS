<template>
  <section class="grid grid--1x4 ">
    <Card
      v-for="(data, index) in api"
      :key="index"
      :title="data.title"
      :price="data.price"
      :calories="data.calories"
      :type="data.type"
      :id="data.id"
      @product="product"
    />
  </section>
</template>

<script>
import Card from '@/components/card.vue';
import {  computed } from 'vue';

import { useStore } from 'vuex'
export default {
  name: 'MerchBlock',
  components: { Card },
  setup() {
      const store = useStore();
    function product(val){
      store.commit('addToCart',val)
    }
    return {
      api: computed(() => store.state.products),
      product
    };
  },
};
</script>

<style></style>
