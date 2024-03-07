import express from 'express'
import { Users } from "../model/Users.js";
import { Products } from "../model/Products.js";
import { Cart } from "../model/Cart.js";

const cartRouter = express.Router();

cartRouter.get("/user/:id/cart", (req, res) => {
  try {
    users.fetchCart(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve product to Cart",
    });
  }
});
cartRouter.post("/user/:id/cart", (req, res) => {
  try {
    users.fetchUsers(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to Add product to Cart",
    });
  }
});
cartRouter.patch("/user/:id/cart/:id", (req, res) => {
  try {
    users.UpdateCart(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to Update Cart",
    });
  }
});
cartRouter.delete("/user/:id/cart", (req, res) => {
  try {
    users.deleteItem(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve product",
    });
  }
});

export { 
    cartRouter };
