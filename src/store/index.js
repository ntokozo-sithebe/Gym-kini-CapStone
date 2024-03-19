import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import AuthenticateUser from "@/service/AuthenticateUser";
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
    async addUser(context, payload) {
      try {
        let { msg } = (await axios.post(`${myURL}users/add`, payload)).data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "",
            text: msg,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "login" });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${myURL}users`)).data;
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
    async fetchUser(context, userID) {
      try {
        let { result } = (await axios.get(`${myURL}.users/${userID.id}`)).data;
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
    // async addUser(context, info) {
    //   try {
    //     let { result } = (await axios.post(`${myURL}.users/${info.id}`)).data;
    //     if (result) {
    //       context.dispatch("setUser", result);
    //     } else {
    //       sweet({
    //         title: "Adding a single user",
    //         text: " User was not added",
    //         icon: "userInfo",
    //         timer: 2000,
    //       });
    //     }
    //   } catch (e) {
    //     sweet({
    //       title: "Error",
    //       text: "A user was not added",
    //       icon: "error",
    //       timer: 2000,
    //     });
    //   }
    // },
    async updateUser(context, gym) {
      try {
        let { msg } = (
          await axios.patch(`${myURL}users/user/${gym.userID}`, gym)
        ).data;

        context.dispatch("fetchUsers");

        sweet({
          title: "Updated a single user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        // "An error occurred when updating user",
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteUser(context, userID) {
      try {
        alert(userID);
        let { result } = (await axios.delete(`${myURL}users/user/${userID}`))
          .data;
        if (result) {
          context.dispatch("setUser");
        } else {
          sweet({
            title: "Deleting a single user",
            text: " User was not deleted",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
		"A user was not deleted"
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${myURL}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving the products",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, gym) {
      try {
        console.log(gym);
        let { result } = (await axios.get(`${myURL}products/${gym.id}`)).data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Fetching a single product",
            text: " Product was not found",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: `from the single item ${e.message}`,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addProduct(context, add) {
      try {
        let { msg } = (await axios.post(`${myURL}products/add`, add)).data;

        context.dispatch("fetchProducts");

        sweet({
          title: "Adding a single product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },

    async updateProduct(context, gym) {
      try {
        let { msg } = (
          await axios.patch(`${myURL}products/product/${gym.prodID}`, gym)
        ).data;

        context.dispatch("fetchProducts");

        sweet({
          title: "Updating a single product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        // "An error occurred when updating a product",
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteProduct(context, prodID) {
      try {
        alert(prodID);
        let response = await axios.delete(
          `${myURL}/products/product/${prodID}`
        );
        if (response.data.result) {
          context.commit("fetchProducts");
        } else {
          sweet({
            title: "Deleting a single product",
            text: " Product was not deleted",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        //"A Product was not deleted"
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },

    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${myURL}users/login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { msg, result });

          // set cookies with user information
          cookies.set("LegitUser", {
            msg,
            token,
            result,
          });

          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome to Gym'kini ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "Home" });
        } else {
          sweet({
            title: "Try Again",
            text: msg,
            icon: "Error",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login to Gym'kini",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  modules: {},
});
