<template>
  <main class="my-orders-page">
    <Container>
      <section class="my-orders-page__content">
        <MainTitle>Orders</MainTitle>
        <CartsList :items="shoppingCart" />
      </section>
    </Container>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Container from "../components/shared/Container";
import MainTitle from "../components/shared/MainTitle";
import CartsList from "../components/shopCart/CartsList";

export default {
  name: "OrderPage",
  components: {
    Container,
    MainTitle,
    CartsList,
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>
