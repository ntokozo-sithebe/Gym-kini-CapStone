<template>
    <div class="container">
        <div class="row">
            <h2 class="text-success">Ntokozo Sithebe &copy; {{ currentDate }}</h2>
        </div>

    </div>
</template>

<script>
    export default {
        name : 'FooterComp',
        data(){
            return{
                currentDate: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>