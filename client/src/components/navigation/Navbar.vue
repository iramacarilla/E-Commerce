<template>
  <nav class="navbar">
    <router-link class="navbar-brand" to="/">
      <Logo />
    </router-link>
    <div class="navbar-collapse">
      <div class="nav-item dropdown">
        <button class="nav-btn" @click="toggle" href="#" type="button">
          <img
            src="../../assets/svg/shopping-basket.svg"
            width="25px"
            alt=""
            srcset=""
          />
        </button>
        <span v-show="cartItemCount" class="nav-number">{{
          cartItemCount
        }}</span>
        <ShoppingCart v-show="isOpen" />
      </div>
    </div>
    <AccountActions v-if="isLoggedIn" />
    <AuthActions v-else />
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import AuthActions from "../header/AuthActions";
import AccountActions from "../header/AccountActions";
import Logo from "../Logo";

export default {
  name: "Navbar",
  components: {
    ShoppingCart,
    Logo,
    AuthActions,
    AccountActions,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapGetters(["cartItemCount"]),
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
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  min-width: 450px;
}
.navbar {
  position: relative;
  padding: 10px 70px;
  background-color: #a4947d;
  display: flex;
  align-items: center;
  //justify-content: space-evenly;
}
.navbar-brand {
  flex: 2 1 0;
  text-decoration: none;
}
.nav-btn {
  background-color: transparent;
  border: none;
}
.nav-number {
  vertical-align: top;
}
</style>
