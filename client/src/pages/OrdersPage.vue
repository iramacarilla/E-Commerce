<template>
  <OrdersList />
</template>

<script>
import OrdersList from "../components/orders/OrdersList";
//import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrdersPage",
  components: {
    OrdersList,
  },

  /*computed: {
    ...mapGetters(["orders"]),
  },
  methods: {
    ...mapActions(["getOrders"]),
  },
  async created() {
    await this.getOrders();
    console.log("ORDERS", this.orders);
  },*/
};
</script>

<style></style>
