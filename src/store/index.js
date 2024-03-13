import { createStore } from "vuex";
// import axios from 'axios';
import sweet from "sweetalert";
const myURL = "https://gym-kini-capstone.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setCart(state, value) {
      state.cart = value;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        let { results } = await fetch(`/$(myURL.users)`).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error whilst retrieving the users",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, info) {
      try {
        let { result } = await fetch(`${myURL}.users/${info.id}`).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: " User was not found",
            icon: "userInfo",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addUser(context, info) {
      try {
        let { result } = await fetch(`${myURL}.users/${info.id}`).data;
        if (result) {
          context.dispatch("setUser", result);
        } else {
          sweet({
            title: "Adding a single user",
            text: " User was not added",
            icon: "userInfo",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not added",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, info) {
      try {
        let { result } = await fetch(`${myURL}.users/${info.id}`).data;
        if (result) {
          context.dispatch("setUser", result);
        } else {
          sweet({
            title: "Updated a single user",
            text: " User was not Updated",
            icon: "userInfo",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not Updated",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteUser(context, info) {
      try {
        let { result } = await fetch(`${myURL}.users/${info.id}`).data;
        if (result) {
          context.dispatch("setUser", result);
        } else {
          sweet({
            title: "Deleting a single user",
            text: " User was not deleted",
            icon: "userInfo",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not deleted",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = await fetch(`${myURL}products`).data;
        if (results) {
          context.dispatch("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving the products",
          icon: "userInfo",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, prodInfo) {
      try {
        let { result } = await fetch(`${myURL}product/${prodInfo.id}`).data;
        if (result) {
          context.dispatch("setProduct", result);
        } else {
          sweet({
            title: "Fetching a single product",
            text: " Product was not found",
            icon: "",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving the products",
          icon: "prodInfo",
          timer: 2000,
        });
      }
    },
    async updateProduct(context, prodInfo) {
      try {
        let { result } = await fetch(`${myURL}product/${prodInfo.id}`).data;
        if (result) {
          context.dispatch("setProduct", result);
        } else {
          sweet({
            title: "Updating a single product",
            text: " Product was not updated",
            icon: "prodInfo",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving the products",
          icon: "prodInfo",
          timer: 2000,
        });
      }
    },
  },
  modules: {},
});
