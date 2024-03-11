import { createStore } from 'vuex'
import axios from 'axios';
import { sweet } from 'sweetalert';
const myURL = 'https://gym-kini-capstone.onrender.com'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart: null

  },
  getters: {
  },
  mutations: {
    setUsers(state, value){
      state.users = value;
    },
    setUser(state, value){
      state.user = value;
    },
    setProducts(state, value){
      state.products = value;
    },
    setProduct(state, value){
      state.product = value;
    },
    setCart(state, value){
      state.cart = value;
    },
  },
  actions: {
    async fetchUsers(context){
      try{
        let {results} = (await axios.get(`$(myURL.users)`)).data ;
        if (results){
          context.commit("setUsers", results)
        }
      }catch(e){
        sweet({
          title: "Error",
          text: "An error whilst retrieving the users",
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchUser(context, userInfo ){
      try{
        let {result} = (await axios.get(`${myURL}.users/${userInfo.id}`)).data
        if (result){
          context.commit("setUser",result);
        }else{
          sweet({
            title: "Retrieving a single user",
            text: " User was not found",
            icon: "userInfo",
            timer: 2000,
          })
        }
      }catch(e){
        sweet({
          title: "Error",
          text: "A user was not found",
          icon:"error",
          timer: 2000,
        })
      }
    },
    async addUser(context, userInfo){
      try{
        let {result} = (await axios.post(`${myURL}.users/${userInfo.id}`)).data
        if (result){
          context.dispatch("setUser",result);
        }else{
          sweet({
            title: "Adding a single user",
            text: " User was not added",
            icon: "userInfo",
            timer: 2000,
          })
        }
      }catch(e){
        sweet({
          title: "Error",
          text: "A user was not added",
          icon:"error",
          timer: 2000,
        })
      }
    },
    async updateUser(context, userInfo){
      try{
        let {result} = (await axios.patch(`${myURL}.users/${userInfo.id}`)).data
        if (result){
          context.dispatch("setUser",result);
        }else{
          sweet({
            title: "Updated a single user",
            text: " User was not Updated",
            icon: "userInfo",
            timer: 2000,
          })
        }
      }catch(e){
        sweet({
          title: "Error",
          text: "A user was not Updated",
          icon:"error",
          timer: 2000,
        })
      }
    },
    async deleteUser(context, userInfo){
      try{
        let {result} = (await axios.delete(`${myURL}.users/${userInfo.id}`)).data
        if (result){
          context.dispatch("setUser",result);
        }else{
          sweet({
            title: "Deleting a single user",
            text: " User was not deleted",
            icon: "userInfo",
            timer: 2000,
          })
        }
      }catch(e){
        sweet({ 
          title: "Error",
          text: "A user was not deleted",
          icon:"error",
          timer: 2000,
        })
      }
    },
    async fetchProducts(context){
      try{
        let {results} = (await axios.get(`${myURL}products`)).data
        if (results){
          context.commit("setProducts", results);
        }
      }catch(e){
        sweet({
          title: "Error",
          text: "An error occurred when retrieving the products",
          icon: "userInfo",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, userInfo){
      try{
        let {result} = (await axios.get(`${myURL}products/${userInfo.id}`)).data;
        if (result){
          context.commit("setProducts", result);
        }else{
          sweet({
            
          })
        }
      }catch(e){
        sweet({
          title: "Error",
          text: "An error occurred when retrieving the products",
          icon: "userInfo",
          timer: 2000,
        });
      }
    },




    

  },
  modules: {
  }
})
