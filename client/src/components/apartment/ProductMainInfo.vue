<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ product.title }}</h1>
      <Rating :rating="product.rating" />
    </div>
    <img :src="product.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ product.descr }}</p>
    <div class="appartment-main-info__btn">
      <Button
        :loading="isLoading"
        @click="addProductToCart({ product, quantity })"
      >
        Buy
      </Button>
    </div>
  </article>
</template>

<script>
import Rating from "../StarRating";
import Button from "../shared/Button";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductMainInfo",
  components: {
    Rating,
    Button,
  },
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["getOneProduct", "cleanup", "addProductToCart"]),
  },
  computed: {
    ...mapGetters(["product"]),
  },
  created() {
    this.getOneProduct(this.id);
  },
  destroyed() {
    this.cleanup();
  },
  /*props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async handleAppBooking() {
      const body = {
        date: Date.now(),
        apartmentId: this.$route.params.id,
      };
      try {
        this.isLoading = true;
        await bookApp(body);
        this.$notify({
          type: "success",
          title: "Order added",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Someting went wrong",
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },*/
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }
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
  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }
  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
