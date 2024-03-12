<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <p class="fixed-bottom justify-content-center text-align-center" >
                 Gym'kini by Ntokozo &copy; {{ currDate }}
                </p> 
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name : 'FooterComp',
        data(){
            return{
                currDate: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>