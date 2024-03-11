import { createStore } from 'vuex'
import axios from 'axios';
import { SweetAlert } from 'sweetalert';
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
        SweetAlert({
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
          SweetAlert({
            title: "Retrieving a single user",
            text: " User was not found",
            icon: "userInfo",
            timer: 2000,
          })
        }
      }catch(e){
        SweetAlert({
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
          SweetAlert({
            title: "Adding a single user",
            text: " User was not added",
            icon: "userInfo",
            timer: 2000,
          })
        }
      }catch(e){
        SweetAlert({
          title: "Error",
          text: "A user was not added",
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
          SweetAlert({
            title: "Deleting a single user",
            text: " User was not deleted",
            icon: "userInfo",
            timer: 2000,
          })
        }
      }catch(e){
        SweetAlert({
          title: "Error",
          text: "A user was not deleted",
          icon:"error",
          timer: 2000,
        })
      }
    }
    

  },
  modules: {
  }
})
