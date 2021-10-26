<template>
  <div class="card toggle--to-secondaryColor">
    <header class="card__header">
      <div class="card--image-container">
        <picture class="image">
          <source type="image/png" :srcset="image1x"/>
          <img :srcset="image1x" :src="barRegular" alt=""
        /></picture>
      </div>
      <h3 class="card__title">{{titleVal}}</h3>
    </header>
    <ul class="list card--body">
      <li class="list__item">
        <p>{{calVal}} calories</p>
        <p>
          caffeine level: {{typeVal}}
        </p>
      </li>
      <li class="list__item">
        <h3>${{priceVal}}</h3>
        <button class="btn btn--primary btn--single-icon" @click="sendEvent">
          <font-awesome-icon
            :icon="['fas', 'plus']"
            size="lg"
            class="icon--card"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {toRefs} from 'vue'
import image1x from '../assets/images/codebars/codebars_bjjsx2_c_scale,w_200.png';
import barRegular from '../assets/images/codebars/codebars_bjjsx2_c_scale,w_200.png';

export default {
  name: 'ProductCard',
  props:{
    title: String,
    price: Number,
    calories: String,
    type: String,
    id:Number
  },
  setup(props, context) {
    const {title, price, calories, type,id}= toRefs(props);
    function sendEvent(){
      context.emit('product',id.value)
    }
    return {
      image1x: image1x,
      barRegular: barRegular,
      titleVal:title,
      priceVal:price,
      calVal: calories,
      typeVal:type,
      sendEvent
    };
  },
};
</script>

<style></style>
