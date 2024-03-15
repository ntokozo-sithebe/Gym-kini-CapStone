<template>
    <div class="container">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <th scope="row">{{ product.prodID }}</th>
      <td>{{ product.prodName }}</td>
      <td>{{ product.prodQuantity }}</td>
      <td>{{ product.prodAmount }}</td>
    </tr>
  </tbody>
</table>

    </div>
</template>
 <!-- only when log in as the admin user it will display the admin button  -->
 <!-- so use if statement for login if user === ntokozo and display to home if there is a normal user -->
<script>
    export default {
        name: 'AdminView',
        // data(){
        //     return{
        //         email: 'ntoky28@gmail.com',
        //         password: 'Tk@2236_'
        //     }
        // },
        computed: {
        products() {
            return this.$store.state.products;
        },
        
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
        // this.$store.commit('deleteProducts');
        // this.$store.commit('addProducts');
        // this.$store.commit('updateProducts');
        
    },
    
        
    }
</script>
<!-- this.$route.params -->

<style scoped>

</style>

<!-- youll be able to perform crud system from admin - it wont be a seen on the navbar and only the admin can perfom the crud sytem 
  so youll set the user and email (your details) in order  to view the admin page -->