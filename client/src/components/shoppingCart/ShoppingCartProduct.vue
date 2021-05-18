<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img :src="item.product.imgUrl" alt="" class="img-fluid image-width" />
        <div>
          <div>
            <strong>{{ item.product.title }}</strong>
          </div>
          <div>
            <small>{{ item.quantity }} x {{ item.product.price }}</small>
          </div>
        </div>
      </div>

      <div>
        <div class="btn-group btn-group-sm me-2" role="group">
          <button
            class="btn btn-dark"
            @click="minusProductToCart({ product, quantity })"
          >
            -
          </button>
          <button
            class="btn btn-dark"
            @click="addProductToCart({ product, quantity })"
          >
            +
          </button>
        </div>
        <button class="btn btn-danger btn-sm" @click.stop="">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters(["product"]),
  },
  methods: {
    ...mapActions(["getOneProduct", "addProductToCart", "minusProductToCart"]),
  },
};
</script>

<style>
.image-width {
  width: 90px;
}
</style>
