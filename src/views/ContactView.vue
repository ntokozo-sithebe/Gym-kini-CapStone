<template>
    <div class="container-fluid">
        <!-- <div>
            <img class="img-fluid w-100" src="https://i.ibb.co/GpDpTGB/IMG-20240107-123230-833-1.webp" alt="bckImage" loading="lazy" id="contact">
        </div> -->
        <div class="overlay-form">
        <div class="row">
            <div class="col justify-content-center overlay_form text-black ">
                <form action="" method="post">
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="Name" rows="2" cols="10" >
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

    </div>
</template>

<script>
    export default {
        name : 'ContactView'
    }
</script>

<style scoped>
.container-fluid{
    height: 70vh ;
    width: 70%;
    background-image: url('https://i.ibb.co/GpDpTGB/IMG-20240107-123230-833-1.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 40%;
    background-attachment: fixed;
    margin: auto;
    opacity: 100%;
}
.overlay-form {
    position: absolute;
    background-color: white;
    border-radius: 10px;
    top: 50% ;
    translate: middle;
    align-items: center;
}






</style>