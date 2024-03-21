<template>
    <div class="container">
		<div>
			<form @submit.prevent="filteredProducts" action="/product" method="get" class=" mx-3 ms-auto mt-3">
			<input type="text" class="rounded-pill p-3" placeholder="Search your Favorites" v-model="searchProduct"> 
			<button class="filter m-2">Sort</button>
		</form>
		</div>
        <div class="row d-block d-flex" v-if="products">
            <Card class="col-md-4 justify-content-center" id="Card" v-for="product in products" :key="product">
                <template #cardHeader>
                <h2 class="name"> {{ product.prodName }}</h2>
                </template>
                <template #cardBody>
                <img class="img-fluid" id="bomb" :src="product.prodUrl" alt="productImages" loading="lazy">
                <p class="desc">{{ product.prodDesc }}</p>
                <p> R {{ product.prodAmount }} </p>
                <button class="one">
					<router-link :to="{ name: 'product', params: { id: product.prodID}}"> View More </router-link>
                </button>
                <button class="one">
					Add to cart
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
        Card
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
		filteredProducts() {
      if (!this.searchProduct) return this.products;
      return this.products.filter(product =>
        product.prodName.toLowerCase().includes(this.searchProduct.toLowerCase())
      );
    
  },
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods:{
		// filteringProducts(product){
		// 	this.products = this.products.filter(products =>{
		// 		return products.prodName
		// 		.toLowerCase()
		// 		.includes(product.toLowerCase());
		// 	});
		// }


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



#cardBody{
    justify-content: center;
    align-items: center;
	font-family: "Playfair Display", serif;
	/* background-color: #f3cea9; */
	border: 3px;

}
body{
	justify-content: center;
	text-align: center;
	align-items: center;
}

#Card{
    width: 25rem;
	text-align: center;
	background-color: #f3cea9;;
	margin: 1rem;
	padding: 1rem;
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
	padding: 0.3rem ;
	margin: 3px;
	background-color: white;
	color: black;
}

filter{
	border-radius: 5px;
	padding: 3px;
	margin: 5px
}
</style>