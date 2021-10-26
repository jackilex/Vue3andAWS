<template>
<section class="block block--dark block--skewed-left hero">
      <div class="container grid grid--1x2">
        <header class="block__header hero__content">
          <h1 data-aos="zoom-in-up" class="block__heading">
            If Having Coffee In The Morning Doesn’t Wake You, Get A CodersBar
          </h1>
          <p class="hero__tagline">
            The ultimate enrgy bar to eat, code , sleep and repeat!
          </p>
          <a
            target="_blank"
            href=""
            class="btn btn--accent btn--stretched"
            >Learn More</a
          >
        </header>
        <picture class="image">
          <source type="image/png" :srcset="image1"/>
          <img :srcset="image1x" :src="image1" alt=""
        /></picture>
      </div>

    </section>
   
  
</template>

<script>
import {ref} from 'vue';
import image1x from '../../assets/images/codebars/codebars_bjjsx2_c_scale,w_200.png';

export default {
    name:'IntroBlock',
    setup(){
        const image1=ref(image1x)

        return{
            image1
        }
    }

}
</script>

<style>

</style>