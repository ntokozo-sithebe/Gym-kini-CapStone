<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="info in  products" :class="info.prodID"  :key="info.id">
                <h2 class=""> {{ info.prodName }}</h2>
            </div>
            <div>
                <img class="card-img-top w-50" :scr="info.prodUrl" alt="productImages" loading="lazy">
            </div>
            <div>
                <p>{{ info.prodQuantity }}</p><br>
                <p>{{ info.prodAmount }}</p>
            </div>
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'ProductView',
    components: {
        

    },
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params);
    },
};

</script>

<style scoped></style>