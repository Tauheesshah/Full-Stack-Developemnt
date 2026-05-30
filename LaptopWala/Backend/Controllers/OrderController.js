import Order from "../models/OrderModel.js";
import Cart from "../models/CartModel.js";

export const CreateOrder = async (
  req,
  res
) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("items.product");

    let total = 0;

    cart.items.forEach((item) => {
      total +=
        item.product.price * item.quantity;
    });

    const order = await Order.create({
      user: req.user._id,

      orderItems: cart.items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),

      totalPrice: total,

      paymentStatus: "Paid",
    });

    cart.items = [];

    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ORDER HISTORY

export const GetOrderHistory = async (
  req,
  res
) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).populate("orderItems.product");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};