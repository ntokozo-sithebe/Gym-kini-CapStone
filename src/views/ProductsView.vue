<template>
    <div class="container">
        <div class="row d-block d-flex" v-if="products">
            <Card class="col-md-4 justify-content-center" v-for="product in products" :key="product">
                <template #cardHeader>
                <h2 class=""> {{ product.prodName }}</h2>
                </template>
                <template #cardBody>
                <img class="img-fluid w-100" :src="product.prodUrl" alt="productImages" loading="lazy">
                <p>{{ product.prodDesc }}</p>
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
            cart : ' '
        }
    },
    
    components: {
        Spinner,
        Card
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods:{
        // toCart(){
        //         this.$router.push('/cart')
        //     }
    }
   
};

</script>

<style scoped>

#cardBody{
    justify-content: center;
    align-items: center;
}

</style>