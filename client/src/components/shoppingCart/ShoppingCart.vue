<template>
  <div class="shopping-cart">
    <ShoppingCartProduct
      v-for="item in shoppingCart"
      :key="item.product._id"
      :item="item"
    />

    <div v-if="shoppingCart.length < 1">
      <div class="shopping-cart__text">
        Your shopping cart is empty
      </div>
      <div class="dropdown-divider"></div>
    </div>

    <div class="p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="shopping-cart__price">
          Totalt: <span>{{ shoppingCartTotal }} $</span>
        </div>
      </div>
      <button class="btn btn-primary" @click="getCart">
        <router-link class="account-actions__link" :to="{ name: 'order' }">
          Checkout
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShoppingCartProduct from "./ShoppingCartProduct";
export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartProduct,
  },
  props: ["cart"],
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
  methods: {
    getCart() {
      console.log("this.cart", this.shoppingCart);
    },
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  position: absolute;
  right: 0;
  top: 100%;
  background: #fff;
  padding: 15px;
  color: #000;
  width: 150px;
  border: 1px solid black;
  font-family: inherit;
  &__text {
    font-size: 16px;
    margin-right: 5px;
  }
}
</style>
