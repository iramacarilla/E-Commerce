<template>
  <div class="orders-item">
    <img class="orders-item__photo" :src="order.product.imgUrl" alt="" />
    <div class="orders-item__details">
      <div class="orders-item__text">
        <h2 class="orders-item__title">{{ order.product.title }}</h2>
        <p class="orders-item__location">{{ order.product.descr }}</p>
        <p class="orders-item__price">{{ order.product.price }}</p>
        <div class="orders-item__cost">
          <p>quantity: {{ order.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-item {
  display: flex;
  margin-bottom: 20px;
  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__photo {
    display: block;
    width: 45%;
    height: 190px;
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
  }
}
</style>
