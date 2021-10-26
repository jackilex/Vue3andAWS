<template>
  <section class="grid grid--1x4 ">
    <Card
      v-for="(data, index) in api"
      :key="index"
      :title="data.title"
      :price="data.price"
      :calories="data.calories"
      :type="data.type"
    />
  </section>
</template>

<script>
import Card from '@/components/card.vue';
import { ref } from 'vue';
export default {
  name: 'MerchBlock',
  components: { Card },
  setup() {
    const api = ref([
      {
        title: 'Peanut Butter Chocolate',
        price: 1.45,
        calories: '100',
        type: 'low',
      },
      {
        title: 'Mango Paach bar',
        price: 1.45,
        calories: '100',
        type: 'Mdm',
      },
      {
        title: 'Vanilla Mint Bar',
        price: 1.45,
        calories: '100',
        type: 'High',
      },
      {
        title: 'Cookies and Cream Bar',
        price: 1.45,
        calories: '100',
        type: 'Extra-high',
      },
    ]);

    return {
      api,
    };
  },
};
</script>

<style></style>
