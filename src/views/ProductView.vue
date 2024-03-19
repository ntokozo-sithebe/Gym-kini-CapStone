<template>
    <div class="container">
        <div class="row d-block d-flex" v-if="product">
            <Card class="col-md-4 justify-content-center">
                <template #cardHeader>
                <h2 class=""> {{ product.prodName }}</h2>
                </template>
                <template #cardBody>
                <img class="img-fluid w-100" :src="product.prodUrl" alt="productImages" loading="lazy">
                <p>{{ product.prodDesc }}</p>
                <p> R {{ product.prodAmount }}</p>
                <button>
                    <router-link :to="{ name: 'product', params: { id: product.prodID}}"> Add to Cart </router-link>
                </button>
                <button @click="backHome">
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

<style scoped></style>