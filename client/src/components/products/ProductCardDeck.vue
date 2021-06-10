<template>
  <div>
    <span class="range__title" @click="toggle">Price </span>

    <div class="range-box" v-show="isOpen">
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          v-model.number="minPrice"
          @change="setSliderRange"
        />
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          v-model.number="maxPrice"
          @change="setSliderRange"
        />
      </div>
      <div class="range-price">
        <p class="range-price__min">{{ minPrice }}</p>
        <p class="range-price__max">{{ maxPrice }}</p>
      </div>
    </div>
    <ul class="products-list" v-if="sortedProduct.length">
      <ProductCard
        v-for="product in sortedProduct"
        :key="product._id"
        :product="product"
      />
    </ul>
    <ul class="products-list" v-else>
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "./ProductCard";
export default {
  name: "ProductCardDeck",
  components: {
    ProductCard,
  },
  data() {
    return {
      minPrice: 0,
      maxPrice: 5000,
      isOpen: false,
      sortedProduct: [],
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    setSliderRange() {
      if (this.minPrice > this.maxPrice) {
        let tempPrice = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tempPrice;
      }
      this.sortProducts();
    },
    sortProducts() {
      let vm = this;
      this.sortedProduct = [...this.products];
      this.sortedProduct = this.sortedProduct.filter((item) => {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
    },
  },
  mounted() {
    this.sortedProduct;
  },
};
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 200px;
  padding-top: 30px;
  justify-content: space-around;
}
.range-slider {
  width: 200px;
  text-align: center;
  margin-top: 20px;
  position: relative;
  top: -5px;
}

.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  -webkit-appearance: none;
  background-color: #313130;
}
.range-slider svg {
  -webkit-appearance: none;
  background-color: #9a905d;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;

  height: 16px;
  width: 16px;
  border: 1px solid rgb(94, 92, 92);
  border-radius: 50px;
  background: #e9e8e2;
  position: relative;
  z-index: 2;
  top: 2px;
  margin-top: -7px;
}

.range-box {
  display: block;
  margin: auto 220px;
  position: relative;
  top: 15px;
}
.range-price {
  display: flex;
  margin-top: 5px;
  &__min {
    margin-left: 3px;
    margin-right: 90px;
  }
}
.range__title {
  display: block;
  margin: auto 260px;
  cursor: pointer;
  margin-top: 50px;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.range__title:before {
  content: "";
  border-color: #000;
  border-image: none;
  border-style: solid;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 50%;
  left: 6%;
  margin-top: 2px;
  transform: translateY(-5px) rotate(45deg);
  transition: all 0.3s ease;
}
</style>
