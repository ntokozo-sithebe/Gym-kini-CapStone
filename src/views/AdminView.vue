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
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td colspan="2"></td>
      <td></td>
    </tr>
  </tbody>
</table>

    </div>
</template>
 <!-- only when log in as the admin user it will display the admin button  -->
 <!-- so use if statement for login if user === ntokozo and display to home if there is a nnormal user -->
<script>
    export default {
        name: 'AdminView',
        data(){
            return{
                email: 'ntoky28@gmail.com',
                password: 'Tk@2236_'
            }
        },
        computed: {
        products() {
            return this.$store.state.products;
        },
        
    },
    mounted() {
        this.$store.dispatch('fetchProducts', this.$route.params);
        this.$store.dispatch('deleteProducts', this.$route.params);
        this.$store.dispatch('addProducts', this.$route.params);
        this.$store.dispatch('updateProducts', this.$route.params);
        
    },
        
    }
</script>

<style scoped>

</style>

<!-- youll be able to perform crud system from admin - it wont be a seen on the navbar and only the admin can perfom the crud sytem 
  so youll set the user and email (your details) in order  to view the admin page -->