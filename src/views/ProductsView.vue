<template>
    <div class="container">
		<div>
			<form @submit.prevent="filteredProducts" action="/product" method="get">
			<input type="text" placeholder="Search your Favorites" v-model="searchProduct"> 
			<button class="filter">Sort</button>
		</form>
		</div>
		
	
        <div class="row d-block d-flex" v-if="products">
            <Card class="col-md-4 justify-content-center" v-for="product in products" :key="product">
                <template #cardHeader>
                <h2 class=""> {{ product.prodName }}</h2>
                </template>
                <template #cardBody>
                <img class="img-fluid w-100" :src="product.prodUrl" alt="productImages" loading="lazy">
                <p class="desc">{{ product.prodDesc }}</p>
                <p> R {{ product.prodAmount }} </p>
                <button>
                    <router-link :to="{ name: 'product', params: { id: product.prodID}}"> View More </router-link>
                </button>
                <button>
                    Add to cart
                </button>
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

#cardBody{
    justify-content: center;
    align-items: center;
}

.Card{
    width: 25px;
}

</style>