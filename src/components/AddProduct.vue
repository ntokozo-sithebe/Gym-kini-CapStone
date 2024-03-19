<template>
    <div class="container-fluid">
        
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
            <input type="text" v-model="payload.prodName" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Description:</label>
            <input type="text"  v-model="payload.prodDesc"  class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Category:</label>
            <input type="text"  v-model="payload.prodCategory"  class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Product Amount:</label>
            <input type="text"  v-model="payload.prodAmount"  class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product Url:</label>
            <textarea  v-model="payload.prodUrl"  class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  @click="addProduct()"> Add Product </button>
      </div>
    </div>
  </div>
</div>

        </div>
    
      </div>
      
</template>

<script>

    export default {
        name: 'AddProductComp',
        data() {
            return {
              payload:
              {
                prodName: null,
                prodDesc: null,
                prodCategory:null,
                prodAmount: null,
                prodUrl: null

              }
            }
        },
        computed:{
            products(){
             return   this.$store.state.products;
            }
 
        },
        mounted(){
          this.$store.dispatch('fetchProducts')
        },
        methods:{
            addProduct(){
              this.$store.dispatch('addProduct',this.payload)
            }      
        },
   


    }
</script>

<style scoped>

</style>