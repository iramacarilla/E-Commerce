const mongodb = require("mongoose");

const orderSchema = mongodb.Schema(
  {
    items: [
      {
        product: {
          type: Object,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
    totalQuantity: {
      type: Number,
    },
  },
  { versionKey: false }
);

module.exports = mongodb.model("Order", orderSchema);
