<template>
  <div>
    <p>Order Number: {{ item._id }}</p>
    <div class="orders-item">
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
  display: flex;
  margin-bottom: 20px;
  &__title {
    font-size: 24px;
    color: #6d5c47;
    margin-bottom: 20px;
    font-weight: 700;
  }
  &__photo {
    display: block;
    width: 45%;
    object-fit: cover;
  }
  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 20px;
    border: 2px solid #e1efff;
    border-left: none;
  }
  &__price {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #847159;
  }
  &__location {
    font-size: 18px;
    margin-bottom: 10px;
    color: #847159;
  }
  &__cost {
    font-size: 18px;
    margin-bottom: 10px;
    color: #6d5c47;
  }
}
</style>
