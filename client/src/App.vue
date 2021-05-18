<template>
  <div>
    <Navbar />
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/navigation/Navbar";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["cartItemCount"]),
  },
};
</script>

<style lang="scss" scoped></style>
