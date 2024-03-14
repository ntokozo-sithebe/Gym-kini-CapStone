<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 justify-content-center">
                <form action="" method="post">
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="Name" rows="2" >
                        </textarea>
                    </div>
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="LastName" rows="2">
                        </textarea>
                    </div>
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="Email" rows="2" >
                        </textarea>
                    </div>
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="Message" rows="2" >
                        </textarea>
                    </div>
                    <button class="btn m-2 bg-white text-black text-align-center">
                        Submit
                    </button>
                </form>
                

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name : 'ContactView'
    }
</script>

<style scoped>
.container-fluid{
    background-image: url('https://i.ibb.co/GpDpTGB/IMG-20240107-123230-833-1.webp');
    background-repeat: no-repeat;
    background-size: cover 70%;
    background-position: center;
    margin: 0px;
    padding: 0px;
}


</style>