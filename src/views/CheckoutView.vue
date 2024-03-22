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
  </tbody>
</table>

<div>

	<!-- <div v-if="alertVisible" class="Alert">
		<h2 class="fs-1"> Thank you for shopping with us !
			Believe in Better {{ currDate }}
		</h2>

	</div> -->
	
<button @click="showAlert" class="rounded m-2 bg-success-subtle">
	Checkout
</button>
<button  @click="shopMore" class="rounded m-2 bg-success-subtle">
	Shop
</button>
</div>
    </div>
</template>

<script>
    export default {
        name : 'CheckoutView',
		data(){
			return{
				alertVisible: false,
				
      currDate: new Date().getFullYear(),
    

			}
		},

		methods:{
        shopMore(){
                this.$router.push('/products')
            },
			showAlert(){
				window.alert(`Thank you for shopping with us !
			       Believe in Better`)
				// this.alertVisible = !this.alertVisible
			},

			
    }
    }
</script>

<style scoped>
*,
*,
::before,
* ::after {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body{
	font-family: "Playfair Display", serif;
	overflow: hidden;
	scroll-behavior: none
}

button{
	padding: 10px;
}
button :hover{
	background-color: lightgreen;

}

</style>