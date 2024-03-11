import express from 'express'
import { cart } from "../model/index.js";

const cartRouter = express.Router();

cartRouter.get("/order", (req, res) => {
  try {
    cart.fetchOrders(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve product to Cart",
    });
  }
});
cartRouter.post("/", (req, res) => {
  try {
    //cart.
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to Add product to Cart",
    });
  }
});
cartRouter.patch("/UpdateOrder", (req, res) => {
  try {
    cart.updateOrder(res,req) 
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to Update Cart",
    });
  }
});
cartRouter.delete("/deleteOrder ", (req, res) => {
  try {
    cart.deleteOrder(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve product",
    });
  }
});

export { 
    cartRouter };
