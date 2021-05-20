//const initialState = [];
export default {
  state: {
    cart: [],
  },
  getters: {
    shoppingCart: (state) => state.cart,
    cartItemCount: (state) => {
      let counter = 0;
      state.cart.forEach((item) => {
        counter += item.quantity;
      });
      return counter;
    },
    shoppingCartTotal: (state) => {
      let total = 0;
      if (state.cart.length !== 0) {
        state.cart.forEach((item) => {
          total += item.product.price * item.quantity;
        });
      }
      return total;
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find((item) => item.product._id === product._id);

      if (exists) {
        exists.quantity += quantity;
        return;
      }

      state.cart.push({ product, quantity });
    },
    MINUS_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find((item) => item.product._id === product._id);
      if (exists) {
        if (exists.quantity > 0) {
          exists.quantity -= quantity;
          console.log("exists.quantity", exists.quantity);
          return;
        } else return;
      }

      state.cart.push({ product, quantity });
    },
    DELETE_FROM_CART: (state, product) => {
      /*state.cart.filter((item) =>
        console.log(
          "product._id",
          product._id,
          "item.product._id",
          item.product._id
        )
      );*/
      state.cart = state.cart.filter(
        (item) => item.product._id !== product._id
      );
      //console.log("DeleteProduct", product);
      console.log("Deletestate.cartProduct", state.cart);
      return;
    },
    CLEAR_CART_DATA(state) {
      state.cart = [];
      //Object.assign(state, { ...initialState });
    },
  },
  actions: {
    addProductToCart: ({ commit }, { product, quantity }) => {
      commit("ADD_TO_CART", { product, quantity });
    },
    minusProductToCart: ({ commit }, { product, quantity }) => {
      commit("MINUS_TO_CART", { product, quantity });
    },
    deleteProductFromCart: ({ commit }, product) => {
      commit("DELETE_FROM_CART", product);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART_DATA");
    },
  },
};
