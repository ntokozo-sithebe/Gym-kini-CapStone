<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col">
                <p class="fixed-bottom text-align-center text-black" >
                 Gym'kini by Ntokozo Sithebe &copy; {{ currDate }}
                </p> 
            </div>
            <div class="row">
                
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