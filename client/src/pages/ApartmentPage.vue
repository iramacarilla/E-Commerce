<template>
  <main>
    <Container>
      <div v-if="apartment">
        <ProductMainInfo :apartment="apartment" />
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container";
import ProductMainInfo from "../components/apartment/ProductMainInfo";
import { getProductById } from "../services/product.service";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ProductMainInfo,
  },
  data() {
    return {
      apartment: null,
    };
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getProductById(id);
      this.apartment = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
