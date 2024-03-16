<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 me-0 mb-2 mt-2 mb-lg-0 mx-0 justify-content-end">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Product</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Name:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Description:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Amount:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product Url:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addProduct(prodID)" >Add Product</button>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Name</th>
      <th scope="col">Product</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <th scope="row">{{ product.prodID }}</th>
      <td>{{ product.prodName }}</td>
      <td><img class="img-fluid w-25" :src="product.prodUrl" alt="images"></td>
      <td>{{ product.prodDesc }}</td>
      <td>{{ product.prodQuantity }}</td>
      <td> R {{ product.prodAmount }}</td>
      <td class="d=block">
        
<!-- to update -->

<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Update</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog"> 
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Product Update</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Name:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Description:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Amount:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product Url:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Update Product</button>
      </div>
    </div>
  </div>
</div>

<!-- delete  -->
<!--  which will be onclick -->
<button class="btn btn-warning" @click="deleteProduct(product.prodID)">
  Delete
</button>



      </td>

    </tr>
  </tbody>
</table>

    </div>
</template>
 <!-- only when log in as the admin user it will display the admin button  -->
 <!-- so use if statement for login if user === ntokozo and display to home if there is a normal user -->

 <!-- add the update product to update btn -->
<script>
    export default {
        name: 'AdminView',
        data(){
            return{
              newProduct:{

                prodName: '',
                prodDesc: '',
                prodAmount: '',
                prodUrl: '',

              }




                // email: 'ntoky28@gmail.com',
                // password: 'Tk@2236_'
            }
        },
        computed: {
        products() {
            return this.$store.state.products;
        },
        methods:{
          deleteProduct(){
            this.$store.dispatch('deleteProduct',{
              
            })
          },
          openAddModal(){
            this.newProduct ={
              prodName: '',
                prodDesc: '',
                prodAmount: '',
                prodUrl: '',

            }; 
            // $('#addProductModal').modal('show');
        //     this.$store.dispatch('addProduct',{
        //       prodName : this.prodName,
        //       prodDesc: this.prodDesc,
        //       prodAmount: this.prodAmount,
        //       prodUrl: this.prodUrl
        //     })
        //   }
        // }
        
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
        // this.$store.dispatch('deleteProducts');
        this.$store.dispatch('addProducts');
        // this.$store.commit('updateProducts');
        
    },
  }
}
    }
     
  
</script>

// <!-- this.$route.params -->

<style scoped>

.btn{
  display: block;
  margin: 3px;
  justify-content: center;
}

</style>

<!-- youll be able to perform crud system from admin - it wont be a seen on the navbar and only the admin can perfom the crud sytem 
  so youll set the user and email (your details) in order  to view the admin page -->