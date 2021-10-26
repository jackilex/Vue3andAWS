<template>

  <Navbar />
  <div><router-view /></div>
</template>
<script>
import Navbar from '@/components/blocks/Navbar.vue';

export default {
  components: {Navbar},
  setup() {},
};
</script>
<style>

</style>
