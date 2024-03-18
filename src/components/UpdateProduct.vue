<template>
    <div class="container">
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
        <button type="button" class="btn btn-primary" @click="updateProduct()"> Update Product </button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        name: 'UpdateProduct',
        // methods:{
        //     updateProduct(){
        //       this.$store.dispatch('fetchProduct')
        //       .then(()=>{
        //         this.Product = {
        //         prodName: product.prodName,
        //         prodDesc: productDesc,
        //         prodCategory:prodCategory,
        //         prodAmount: prodAmount,
        //         prodUrl: produrl,

        //     }; 

        //       })
        //       .catch(error =>{
        //         console.error('Error updating Product',error)
        //       })
        //     }         
        // },
        computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch('updateProducts');
    },

    }
        
    
</script>

<style  scoped>

</style>