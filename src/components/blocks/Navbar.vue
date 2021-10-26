<template>
  <nav class="nav collapsible " :class="[menuToggle ? toggleClass : '']">
    <div class="nav__brand-container">
      <router-link to="/"><h3>LOGO</h3></router-link>
    </div>
    <div class="nav__box-container">
      <ButtonCart class="cart" :total="cart" />
      <svg
        @click="menuToggle = !menuToggle"
        class="icon icon--white nav__toggler"
      >
        <use href="../../assets/images/sprite.svg#menu"></use>
      </svg>
    </div>
    <ul class="list nav__list collapsible__content">
      <li class="nav__item">
        <a target="_blank" href="#">Menu</a>
      </li>
      <li class="nav__item">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, watch, computed } from 'vue';
import ButtonCart from '../../components/ButtonCart.vue';

import { useStore } from 'vuex';
export default {
  name: 'NavBar',
  components: { ButtonCart },
  setup() {
    const store = useStore();
    const menuToggle = ref(false);
    const toggleClass = ref('collapsible--expanded');

    watch(menuToggle, (currentValue, oldValue) => {
      console.log(currentValue, oldValue);
    });
    return {
      menuToggle,
      toggleClass,
      cart:computed(() => store.state.cart.length),
    };
  },
};
</script>

<style>
.nav {
  background: #000;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
  align-items: center;
  transition: 0.3s ease;
}

.nav__list {
  width: 100%;
  margin: 0;
  order: 3;
}

.nav__item {
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #222;
}

/* to change anchor colors */
.nav__item > a {
  color: #d2d0db;
  transition: color 0.3s;
}

.nav__item > a:hover {
  color: #fff;
}

.nav__toggler {
  opacity: 0.5;
  transition: box-shadow 0.15s;
  cursor: pointer;
}

.nav__brand h3 {
  color: rgb(234, 124, 15);
}

.nav__box-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  order: 2;
}

.collapsible__content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s;
}

.collapsible--expanded .collapsible__content {
  overflow: visible;
  max-height: 100%;
  opacity: 1;
}

.nav.collapsible--expanded .nav__toggler {
  opacity: 1;
  box-shadow: 0 0 0 3px #666;
  border-radius: 5px;
}

.nav__brand {
  order: 1;
}

.cart {
  transform: scale(0.7);
}

@media screen and (min-width: 768px) {
  .nav__toggler {
    display: none;
  }
  .nav__list {
    width: auto;
    display: flex;
    font-size: 1.6rem;
    max-height: 100%;
    opacity: 1;
    order: 2;
  }

  .nav__item {
    border: 0;
  }
  .nav__box-container {
    order: 3;
  }

  .nav__brand-container {
    flex-grow: 1;
  }
}
</style>
