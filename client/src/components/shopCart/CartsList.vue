<template>
  <div class="orders-list">
    <p class="orders-list__nothing" v-if="!shoppingCart.length">No orders</p>
    <template v-else>
      <CartItem
        v-for="order in shoppingCart"
        :key="order.product._id"
        :order="order"
      />
    </template>
    <p class="order-total">Total: {{ shoppingCartTotal }}</p>
    <Button class="order-btn" @click="handleOrder">
      Make an order
    </Button>
  </div>
</template>

<script>
//:loading="isLoading"
import { mapActions, mapGetters } from "vuex";
//import { createOrder } from "../../services/orders.service";
import Button from "../shared/Button";
import CartItem from "./CartItem";
export default {
  name: "CartsList",
  components: {
    CartItem,
    Button,
  },

  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal", "orders"]),
  },
  methods: {
    ...mapActions(["addOrder", "clearCart", "getOrders"]),

    async handleOrder() {
      try {
        //this.isLoading = true;
        await this.addOrder({
          items: this.shoppingCart,
          totalPrice: this.shoppingCartTotal,
        });
        this.clearCart();

        this.getOrders();
        console.log("this.orders", this.orders);
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
        //this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
  &__nothing {
    margin-top: 30px;
    font-size: 34px;
    color: #6d5c47;
  }
}
.order-total {
  margin-top: 30px;
  font-size: 24px;
  color: #6d5c47;
}
.order-btn {
  margin-top: 30px;
}
</style>
