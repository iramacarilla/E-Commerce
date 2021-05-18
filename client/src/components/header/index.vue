<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/">
          <Logo />
        </router-link>
        <AccountActions />
        <AuthActions />
      </div>
    </Container>
  </header>
</template>
<script>
import Container from "../shared/Container";
import Logo from "../Logo";
import AuthActions from "./AuthActions";
import AccountActions from "./AccountActions";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    Container,
    Logo,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

//--v-if="isLoggedIn"*/}--//
