<template>
  <form class="form" @submit.prevent="handeleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput
      v-model="price"
      placeholder="Price from"
      error-message="Should not be empty"
      :rules="rules"
    />
    <SubmitButton type="submit" class="form__submit"
      >Housing Selection</SubmitButton
    >
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect";
import CustomInput from "../shared/Input";
import SubmitButton from "../shared/Button";
import { isRequired, charLimit } from "../../utils/validationRules";
export default {
  name: "ProductFilterForm",
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Stockholm",
        "Malmö",
        "Idre",
        "Kiruna",
        "Åre",
        "Kalmar",
      ];
    },
  },
  methods: {
    handeleSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
