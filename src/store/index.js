import { createStore } from "vuex";
import axios from 'axios';
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();
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
    async register(context, payload){
      try{
      let {msg} = (await axios.post(`${myURL}users/register`,payload)).data
      if(msg){
        context.dispatch('fetchUsers')
        sweet({
          title: '',
          text: msg,
          icon: "success",
          timer: 2000
        })
        router.push({name:'login'})
      }
      }catch(e){
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`/${myURL}users`)).data;
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
    async fetchUser(context, gym) {
      try {
        let { result } = (await axios.get(`${myURL}.users/${gym.id}`)).data;
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
        let { result } = (await axios.patch(`${myURL}users/${gym.id}`)).data;
        if (result) {
          context.dispatch("setUser", result); // may remove result
        } else {
          sweet({
            title: "Updated a single user",
            text: " User was not Updated",
            icon: "success",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating user",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteUser(context, gym) {
      try {
        let { result } = (await axios.delete(`${myURL}users/${gym.id}`)).data;
        if (result) {
          context.dispatch("setUser");
        } else {
          sweet({
            title: "Deleting a single user",
            text: " User was not deleted",
            icon: "success",
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
        let { result } = (await axios.get(`${myURL}products/${gym.id}`)).data;
        if (result) {
          context.dispatch("setProduct", result);
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
          text: "An error occurred when retrieving the products",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addProduct(context) {
        try {
          let { result } = (await axios.post(`${myURL}products/produce`)).data;
          if (result) {
            context.dispatch("setProduct", result);
          } else {
            sweet({
              title: "Adding a single user",
              text: " Product was not added",
              icon: "userInfo",
              timer: 2000,
            });
          }
        } catch (e) {
          sweet({
            title: "Error",
            text: "A Product was not added",
            icon: "error",
            timer: 2000,
          });
        }
      },


    async updateProduct(context, gym) {
      try {
        let { result } = (await axios.patch(`${myURL}products/${gym.id}`)).data;
        if (result) {
          context.dispatch("setProduct", result);
        } else {
          sweet({
            title: "Updating a single product",
            text: " Product was not updated",
            icon: "success",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving the products",
          icon: "success",
          timer: 2000,
        });
      }
    },
    async deleteProduct(context, prod) {
      try {
        let response = (await axios.delete(`${myURL}product/${prod.id}`));
        if (response.data.result) {
          context.dispatch("deleteProduct", prod.id);
        } else {
          sweet({
            title: "Deleting a single product",
            text: " Product was not deleted",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A Product was not deleted",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async login(context, gym){
      try{
        const {msg, token, result} = ( await axios.post(`${myURL}users/login`, gym)).data
        if(result){
          context.commit('setUser', {msg, result})

          // set cookies with user information
          cookies.set('LegitUser',{
            msg, 
            token, 
            result
          })
           
          AuthenticateUser.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome to Gym'kini ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000
          })
          router.push({name: 'Home'})
        }else{
          sweet({
            title: 'Try Again',
            text: msg,
            icon: 'Error',
            timer: 2000
          })
        }
      }
      catch(e){
        sweet({
          title: 'Error',
          text: 'Failed to login to Gym\'kini',
          icon: "error",
          timer: 2000
        })
      }
    }

   
  },
  modules: {},
});
