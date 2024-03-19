<template> 

  <!-- place as component so that you can use as an if/else statement to display the crud sytem for user and productsfor specific admin user -->
      <div class="container">
        <div class="col-md-6 me-0 mb-2 mt-2 mb-lg-0 mx-0 justify-content-end">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${updateModal}`" data-bs-whatever="@mdo">Update Product</button>
  <div class="modal fade" :id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="updateModalLabel"> Product Update </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label"> Product ID: </label>
              <input type="text" v-model="payload.prodID" class="form-control" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Product Name:</label>
              <input type="text" v-model="payload.prodName" class="form-control" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Product Description:</label>
              <input type="text"  v-model="payload.prodDesc"  class="form-control" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Product :</label>
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
          <button type="button" class="btn btn-primary"  @click.prevent="updatingProduct"> Update Product </button>
        </div>
      </div>
    </div>
  </div>
  
          </div>
  
  </div>
  
  </template>
   
  <script>
  
  
      export default {
          name: 'AdminView',
          props: ['productData', 'updateModal'],
          components:{

          },
          data() {
              return {
                payload:
                {
                  prodID: this.productData.prodID,
                  prodName: this.productData.prodName,
                  prodDesc: this.productData.prodDesc,
                  prodCategory:this.productData.prodCategory,
                  prodAmount: this.productData.prodAmount,
                  prodUrl: this.productData.prodUrl
  
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
            updatingProduct(){
                // this.$store.dispatch('updateProduct', (data =>{
                //   this.payload.prodID = data.prodID
                //   this.payload.prodName = data.prodName
                //   this.payload.prodDesc = data.prodDesc
                //   this.payload.prodCategory = data.prodCategory
                //   this.payload.prodAmount = data.prodAmount
                //   this.payload.prodUrl = data.prodUrl
                // })) == long way 
                this.$store.dispatch('updateProduct', this.payload)
              }  
          },
    }
  
       
    
  
  // <!-- this.$route.params -->
  
  </script>
  <style scoped>
  
  .btn{
    display: block;
    margin: 3px;
    justify-content: center;
  }
  
  </style>
  
  <!-- youll be able to perform crud system from admin - it wont be a seen on the navbar and only the admin can perfom the crud sytem 
    so youll set the user and email (your details) in order  to view the admin page -->