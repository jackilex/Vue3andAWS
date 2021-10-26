<template>
  <button class="btn btn--primary btn--block">
    <p>{{ total }}</p>
    <font-awesome-icon :icon="['fas', 'shopping-bag']" size="lg" style="margin-left:7px;" />
    My Cart
  </button>
</template>

<script>
export default {
  name: 'ButtonCart',
  props: {
    total: Number,
  },
};
</script>

<style></style>
