<template>
  <div class="orders-item">
    <p class="orders-item__title">
      Order Number: <span> {{ item._id }}</span>
    </p>
    <div class="orders-item__content">
      <OrderItemsDetails
        v-for="part in item.items"
        :key="part._id"
        :part="part"
      />
    </div>
  </div>
</template>

<script>
import OrderItemsDetails from "./OrderItemsDetails";
//import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderItem",
  components: {
    OrderItemsDetails,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.item, "ITEM");
  },
};
</script>

<style lang="scss" scoped>
.orders-item {
  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  &__title span {
    font-size: 18px;
  }
  &__content {
    margin-bottom: 60px;
  }
}
</style>
