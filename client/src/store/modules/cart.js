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
      console.log("product", product);
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
  },
  actions: {
    addProductToCart: ({ commit }, { product, quantity }) => {
      commit("ADD_TO_CART", { product, quantity });
    },
    minusProductToCart: ({ commit }, { product, quantity }) => {
      commit("MINUS_TO_CART", { product, quantity });
    },
  },
};
