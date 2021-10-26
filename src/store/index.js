import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        title: 'Peanut Butter Chocolate',
        price: 1.45,
        calories: '100',
        type: 'low',
      },
      {
        id: 2,
        title: 'Mango Paach bar',
        price: 1.99,
        calories: '100',
        type: 'Mdm',
      },
      {
        id: 3,
        title: 'Vanilla Mint Bar',
        price: 2.15,
        calories: '100',
        type: 'High',
      },
      {
        id: 4,
        title: 'Cookies and Cream Bar',
        price: 4.45,
        calories: '100',
        type: 'Extra-high',
      },
    ],
    cart: [],
  },
  mutations: {
    addToCart( state, id){
      console.log( id )
      state.cart.push(id)
    }
  },
  actions: {
    
  },
  modules: {},
});
