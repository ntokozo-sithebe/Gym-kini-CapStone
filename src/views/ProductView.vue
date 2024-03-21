<template>
    <div class="container">
        <div class="row d-block d-flex" v-if="product">
            <Card class="col-md-4 justify-content-center" id="Card">
                <template #cardHeader>
                <h2 class="name"> {{ product.prodName }}</h2>
                </template>
                <template #cardBody>
                <img class="img-fluid" id="bomb" :src="product.prodUrl" alt="productImages" loading="lazy">
                <p>{{ product.prodDesc }}</p>
                <p> R {{ product.prodAmount }}</p>
                <button  class="one">
                    <router-link :to="{ name: 'product', params: { id: product.prodID}}"> Add to Cart </router-link>
                </button>
                <button  class="one" @click="backHome">
                    Go Back
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
    name: 'ProductView',
    components: {
        Spinner,
        Card
        

    },
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params);
    },
    methods:{
        backHome(){
                this.$router.push('/products')
            }
    }
};

</script>

<style scoped>
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