<template>
    <div class="container">
        <div class="row" v-if="products">
            <div class="col" v-for="product in products" :key="product">
                <h2 class=""> {{ product.prodName }}</h2>
                <img class="img-fluid w-50" :src="product.prodUrl" alt="productImages" loading="lazy">
                <h5>{{ product.prodID }}</h5>
                <p>{{ product.prodQuantity }}</p><br>
                <p> R {{ product.prodAmount }}</p>
                <button>Add to cart </button>
            </div>
            
        </div>
        <div class="row" v-else>
            <Spinner/>
        </div>
        
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';


export default {
    // name: 'ProductsView',
    data(){
        return{
            cart : ' '
        }
    },
    
    components: {
        Spinner
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
        
    }
};

</script>

<style scoped>

</style>