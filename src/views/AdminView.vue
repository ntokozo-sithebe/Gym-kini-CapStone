<template>
    <div class="container">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Name</th>
      <th scope="col">Product</th>
      <th scope="col">Amount</th>
      <th scope="col">Price</th>
      <th scope="col">Changes</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <th scope="row">{{ product.prodID }}</th>
      <td>{{ product.prodName }}</td>
      <td><img class="img-fluid w-25" :src="product.prodUrl" alt="images"></td>
      <td>{{ product.prodQuantity }}</td>
      <td> R {{ product.prodAmount }}</td>
      <td><button type="button" class="updatebtn rounded-3 bg-info-emphasis p-3 m-1" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                          </svg>Update</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <form>
                                      <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Product Name</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                      </div>
                                      <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Product Amount</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                      </div>
                                      <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Product Description</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                      </div>
                                      <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Product URL:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                      </div>
                                    </form>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" >Add Product </button>

                                    </td>

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
        this.$store.commit('deleteProducts');
        this.$store.commit('addProducts');
        this.$store.commit('updateProducts');
        
    },
    
        
    }
</script>
<!-- this.$route.params -->

<style scoped>

</style>

<!-- youll be able to perform crud system from admin - it wont be a seen on the navbar and only the admin can perfom the crud sytem 
  so youll set the user and email (your details) in order  to view the admin page -->