<template>
  <div class="orders-list">
    <p v-if="!shoppingCart.length">No orders</p>
    <template v-else>
      <CartItem
        v-for="order in shoppingCart"
        :key="order.product._id"
        :order="order"
      />
    </template>
    <p>Total: {{ shoppingCartTotal }}</p>
    <Button @click="handleOrder" :loading="isLoading">
      Забронировать
    </Button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { createOrder } from "../../services/orders.service";
import Button from "../shared/Button";
import CartItem from "./CartItem";
export default {
  name: "CartsList",
  components: {
    CartItem,
    Button,
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
  methods: {
    async handleOrder() {
      try {
        this.isLoading = true;
        await createOrder(this.shoppingCart, this.shoppingCartTotal);
        this.$notify({
          type: "success",
          title: "Заказ добавлен",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Произошла ошибка",
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
}
</style>
