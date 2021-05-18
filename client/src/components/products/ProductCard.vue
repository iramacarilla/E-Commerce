<template>
  <div class="product-main-info">
    <div class="product-main-info__heading">
      <img
        :src="product.imgUrl"
        alt="..."
        class="product-main-info__photo"
        width="500px"
        height="250px"
      />
      <div class="card-body">
        <h5 class="product-main-info__title">{{ product.title }}</h5>
        <p class="product-main-info__price">{{ product.price }}</p>

        <router-link
          :to="{ name: 'ProductDetails', params: { id: product._id } }"
          type="button"
          class="product-main-info__btn"
          >Show Product</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.product-main-info {
  width: 45%;
  margin-right: 15px;
  margin-bottom: 30px;
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  &__photo {
    max-width: 100%;
  }
  &__price {
    line-height: 1.3;
    margin-top: 30px;
  }
  &__btn {
    text-decoration: none;
    text-transform: capitalize;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
