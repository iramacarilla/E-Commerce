const mongodb = require("mongoose");
const Order = require("./orderSchema");

const addOrder = async (req, res, next) => {
  try {
    /*const userID = req.user.id;*/
    const order = await Order.create(req.body /*, userID*/);
    if (order) {
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          order,
        },
      });
    } else {
      return next({
        status: 404,
        message: "Not found contact",
        data: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addOrder,
};
