<template>
    <div class="container-fluid">
        <div class="row d-flex mx-auto">
            <div class="col-md-6 justify-content-center align-items-center">
                <p class="fixed-bottom text-align-center text-black" >
                 Gym'kini &copy; {{ currDate }}
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