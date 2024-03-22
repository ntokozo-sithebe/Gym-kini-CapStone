<template>
    <div class="container">
		<div>
			<form @submit.prevent="filteredProducts" action="/product" method="get" class=" mx-0 ms-auto mt-3">
			<input type="text" class="rounded col-md-9 m-7 p-3" placeholder="Search your Favorites" v-model="searchProduct"> 
			<button class="filter m-2 rounded bg-success-subtle" @click.prevent="sorted">Sort</button>
		</form>
		</div>
        <div class="row d-block d-flex" v-if="products">
            <Card class="col-md-4 justify-content-center" id="Card" v-for="product in products" :key="product">
                <template #cardHeader>
                <h2 class="name p-2"> {{ product.prodName }}</h2>
                </template>
                <template #cardBody>
                <img class="img-fluid" id="bomb" :src="product.prodUrl" alt="productImages" loading="lazy">
                <p class="desc m-2">{{ product.prodDesc }}</p>
                <p> R {{ product.prodAmount }} </p>
				<p>{{ product.prodCategory }}</p>
                <button class="one">
					<router-link :to="{ name: 'product', params: { id: product.prodID}}" class="text-black"> View More </router-link>
                </button>
                <button class="one" >
					<!-- <CheckoutView/> -->
					<a href="checkout" class="text-black" @click="addingToCart()" >Add to cart </a>
                </button>
				<p class="mt-3">{{ product.prodID }}</p>
            </template>
            </Card>
         </div>
        <div class="row" v-else>
            <Spinner/>
        </div>

    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import Card from '@/components/Card.vue';
// import CheckoutView from './CheckoutView.vue';


export default {
    // name: 'ProductsView',
    data(){
        return{
            searchProduct : '',
			// fetchingProducts: this.productsData
        }
    },
    
    components: {
        Spinner,
        Card,
		// CheckoutView
		
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
	
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods:{
 sorted(){
          this.products.sort((a,b)=>{
					return a.prodAmount.localCompare(b.prodAmount)
				});
				this.displayProdName(this.sorted)
			
		},
	filteredProducts() {
      if (this.searchProduct){
		return [];
	} 
	
      return this.products.filter(product =>
        product.prodName.toLowerCase().includes(this.searchProduct.toLowerCase())
      );
    
  },



        // toCart(){
        //         this.$router.push('/cart')
        //     
    },
	// search(productsData){
	// 	if(productsData != null && productsData !== ''){
	// 		this.products.find().filter(productsData).forEach(productsData =>{
	// 			productsData.prodName

	// 	})
	// 	}
	// }
   
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

body{
	font-family: "Playfair Display", serif;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	background-color: white;
	scroll-behavior: none;
}

#cardBody{
    justify-content: center;
    align-items: center;
	font-family: "Playfair Display", serif;
	/* background-color: #f3cea9; */
	border: 3px;

}


#Card{
    width: 25rem;
	text-align: center;
	background-color: #f3cea9;;
	margin: 1rem;
	padding: 1rem;
	justify-content: center;
	align-items: center;
}

#bomb{
	height: 30rem;
}
.one{
	border: 2px solid;
	border-radius: 1rem;
	background-color: white;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin: 3px;
	background-color: white;
	color: black;
}

filter{
	border-radius: 5px;
	padding: 3px;
	margin: 5px
}



@media screen and (width < 360){
	img [alt="productImages"]{
    width: 100%;
    aspect-ratio: 1/1;
    height: 100%;
	display: block;
	margin: 0px;
	position: relative;
	margin: 2px

}
body{
	justify-content: center;
	align-items: center;
	overflow: hidden;
}
}

</style>