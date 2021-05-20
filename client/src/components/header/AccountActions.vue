<template>
  <div class="account-actions" @mousemover="open" @mouseleave="close">
    <button type="button" @click="toggle" class="account-actions__btn">
      <img src="../../assets/svg/user.svg" width="25px" alt="" srcset="" />
      <ul v-show="isOpen" class="account-actions__list">
        <li class="account-actions__item">
          <router-link class="account-actions__link" :to="{ name: 'orders' }">
            My orders
          </router-link>
        </li>
        <li class="account-actions__item">
          <button
            type="button"
            @click="handleLogOut"
            class="account-actions__logout"
          >
            Log Out
          </button>
        </li>
      </ul>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AccountActions",
  props: ["cart"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
    ...mapActions(["clearCart"]),
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    async handleLogOut() {
      try {
        await this.logOut();
        this.clearCart();
        const { requiresAuth } = this.$route.meta;

        //console.log(requiresAuth);
        if (!requiresAuth) {
          this.$router.push({ name: "login-page" });
        } else this.$router.push({ name: "login-page" });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Someting went wrong",
          text: error.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.account-actions {
  position: relative;
  display: inline-flex;
  padding: 5px 0;
  color: #fff;
  &__btn {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: 16px;
    padding: 0;
    transition: color 0.4s;
    margin-left: 20px;
  }
  &__text {
    margin-right: 5px;
  }
  &__icon {
    transition: fill 0.4s;
    fill: currentColor;
    width: 16px;
    height: 18px;
  }
  &__list {
    position: absolute;
    right: 0;
    top: 100%;
    background: #fff;
    padding: 15px;
    color: #000;
    width: 150px;
    border: 1px solid $secondary-color;
  }
  &__item {
    margin-bottom: 5px;
    transition: color 0.4s;
    &:hover {
      color: $main-color;
    }
  }
  &__link {
    text-decoration: none;
    color: inherit;
  }
  &__logout {
    padding: 0;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
  }
}
</style>
